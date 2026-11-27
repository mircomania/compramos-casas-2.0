const { join } = require('node:path');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: join(__dirname, '.env'), quiet: true });

const requiredConfig = ['AIRTABLE_API_KEY', 'AIRTABLE_BASE_ID', 'AIRTABLE_TABLE_NAME'];
const missingConfig = requiredConfig.filter((key) => !process.env[key]?.trim());

if (missingConfig.length) {
    console.error('Faltan variables de Airtable:', missingConfig.join(', '));
    process.exit(1);
}

const port = Number(process.env.PORT || 5000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error('PORT no válido.');
    process.exit(1);
}

const baseId = encodeURIComponent(process.env.AIRTABLE_BASE_ID.trim());
const tableName = encodeURIComponent(process.env.AIRTABLE_TABLE_NAME.trim());
const tableUrl = 'https://api.airtable.com/v0/' + baseId + '/' + tableName;
const devOrigins = new Set(['http://localhost:5173', 'http://127.0.0.1:5173']);
const extraOrigin = process.env.DEV_ORIGIN?.trim();

if (extraOrigin) {
    if (!/^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d{1,5})?$/.test(extraOrigin)) {
        console.error('DEV_ORIGIN debe ser un origen local válido.');
        process.exit(1);
    }
    devOrigins.add(extraOrigin);
}

const app = express();
app.disable('x-powered-by');

const success = { success: true, message: 'Datos enviados correctamente.' };
const invalid = { success: false, message: 'Los datos del formulario no son válidos.' };
const integrationError = { success: false, message: 'Hubo un problema al procesar el formulario.' };
const requiredFields = ['name', 'phone', 'email', 'property', 'situation'];
const utmFields = ['utmSource', 'utmMedium', 'utmCampaign'];
const options = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
const emailPattern = /^[^\s@\p{Cc}]+@[^\s@\p{Cc}]+\.[^\s@\p{Cc}]+$/u;
const decoder = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true });

function fits(value, maxLength) {
    return !/\p{Cs}/u.test(value) && [...value].length <= maxLength;
}

function validateForm(data) {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    if (requiredFields.some((field) => typeof data[field] !== 'string')) return null;
    if (utmFields.some((field) => Object.hasOwn(data, field) && typeof data[field] !== 'string')) return null;

    const { phone, property, situation } = data;
    const name = data.name.trim();
    const email = data.email.trim();
    const utm = Object.fromEntries(utmFields.map((field) => [field, data[field]?.trim() ?? '']));

    if (
        !name || !fits(name, 150) ||
        phone.length !== 10 || !/^[0-9]{10}$/.test(phone) ||
        !fits(email, 254) || !emailPattern.test(email) ||
        !options.includes(property) || !options.includes(situation) ||
        Object.values(utm).some((value) => !fits(value, 255))
    ) return null;

    return { name, phone, email, propiedad: property, situacion: situation, source: utm.utmCampaign || 'compramoscasas' };
}

app.use('/submit', (req, res, next) => {
    const origin = req.get('origin');
    if (origin && !devOrigins.has(origin)) return res.status(403).json(invalid);
    next();
}, cors({
    origin: [...devOrigins],
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: true,
}));

app.options('/submit', (req, res) => {
    if (!req.get('origin') || req.get('access-control-request-method') !== 'POST') {
        return res.set('Allow', 'POST').status(405).json(invalid);
    }
    res.type('json').status(204).end();
});

app.post('/submit', (req, res, next) => {
    const mediaType = req.get('content-type')?.split(';', 1)[0].trim().toLowerCase();
    if (mediaType !== 'application/json') return res.status(415).json(invalid);
    next();
}, express.raw({ type: 'application/json', limit: '16kb', inflate: false }), async (req, res) => {
    let data;
    try {
        data = JSON.parse(decoder.decode(req.body));
    } catch {
        return res.status(400).json(invalid);
    }

    const fields = validateForm(data);
    if (!fields) return res.status(400).json(invalid);

    try {
        const response = await axios.post(tableUrl, { fields }, {
            headers: {
                Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY.trim(),
                'Content-Type': 'application/json',
            },
            timeout: 15000,
            maxRedirects: 0,
        });

        if (response.status >= 200 && response.status < 300 && typeof response.data?.id === 'string' && response.data.id.trim()) {
            return res.status(200).json(success);
        }

        console.error('Airtable: creación sin confirmar.');
    } catch (error) {
        const status = error?.response?.status;
        const code = error?.code;
        const safeStatus = Number.isInteger(status) ? status : 'sin respuesta';
        const safeCode = typeof code === 'string' && /^[A-Z][A-Z0-9_]{1,39}$/.test(code) ? code : 'desconocido';
        console.error('Airtable: error de integración.', { status: safeStatus, code: safeCode });
    }

    return res.status(502).json(integrationError);
});

app.all('/submit', (_req, res) => res.set('Allow', 'POST').status(405).json(invalid));

app.use('/submit', (error, _req, res, next) => {
    if (res.headersSent) return next(error);

    const status = error.status;
    if (status === 413 || status === 415 || status === 400) return res.status(status).json(invalid);

    console.error('Formulario: error interno al procesar la solicitud.');
    return res.status(500).json(integrationError);
});

const server = app.listen(port, '127.0.0.1', () => {
    console.log('Servidor local disponible en el puerto ' + port + '.');
});
server.on('error', (error) => {
    console.error(error.code === 'EADDRINUSE' ? 'El puerto local ya está en uso.' : 'No se pudo iniciar el servidor local.');
    process.exitCode = 1;
});
