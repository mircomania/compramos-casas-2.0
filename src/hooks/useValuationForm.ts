import { useLayoutEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation } from 'react-router-dom';

const initialFields = {
    name: '',
    phone: '',
    email: '',
    property: '',
    situation: '',
};

const emptyUtm = { utmSource: '', utmMedium: '', utmCampaign: '' };
const utmKey = 'compramoscasas_utmParams';
const utmLifetime = 15 * 24 * 60 * 60 * 1000;
const endpoint = import.meta.env.DEV ? 'http://localhost:5000/submit' : '/backend/submit.php';
const emailPattern = /^[^\s@\p{Cc}]+@[^\s@\p{Cc}]+\.[^\s@\p{Cc}]+$/u;

type Fields = typeof initialFields;
type Field = keyof Fields;
type FieldErrors = Partial<Record<Field, string>>;
type Attribution = typeof emptyUtm;
type StoredAttribution = Attribution & { timestamp: number };
type FormStatus = { type: 'error' | 'success'; message: string };

let memoryAttribution: StoredAttribution | undefined;

export const valuationOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

function isCurrentAttribution(value: unknown): value is StoredAttribution {
    if (!value || typeof value !== 'object') return false;

    const { timestamp, utmSource, utmMedium, utmCampaign } = value as Partial<StoredAttribution>;
    const now = Date.now();
    return typeof timestamp === 'number' && Number.isSafeInteger(timestamp) &&
        timestamp <= now && now - timestamp < utmLifetime &&
        [utmSource, utmMedium, utmCampaign].every(
            (param) => typeof param === 'string' && [...param].length <= 255 && !/\p{Cs}/u.test(param),
        );
}

function readAttribution(): Attribution {
    let stored: unknown;

    try {
        const raw = window.localStorage.getItem(utmKey);
        if (raw !== null) {
            try {
                stored = JSON.parse(raw);
            } catch {
                stored = undefined;
            }

            if (!isCurrentAttribution(stored)) {
                stored = undefined;
                window.localStorage.removeItem(utmKey);
            }
        }
    } catch {
        // Si el almacenamiento está restringido, se conserva la atribución en memoria.
    }

    const validStored = isCurrentAttribution(stored) ? stored : undefined;
    const fallback = isCurrentAttribution(memoryAttribution) ? memoryAttribution : undefined;
    const latest = fallback && (!validStored || fallback.timestamp > validStored.timestamp) ? fallback : validStored;

    if (!latest) return emptyUtm;

    const { utmSource, utmMedium, utmCampaign } = latest;
    return { utmSource, utmMedium, utmCampaign };
}

export function useValuationAttribution() {
    const { search } = useLocation();

    useLayoutEffect(() => {
        const params = new URLSearchParams(search);
        if (!['utm_source', 'utm_medium', 'utm_campaign'].some((key) => params.has(key))) {
            readAttribution();
            return;
        }

        const readParam = (key: string) => [...(params.get(key) ?? '').trim()].slice(0, 255).join('');
        const attribution = {
            utmSource: readParam('utm_source'),
            utmMedium: readParam('utm_medium'),
            utmCampaign: readParam('utm_campaign'),
            timestamp: Date.now(),
        };

        try {
            window.localStorage.setItem(utmKey, JSON.stringify(attribution));
            memoryAttribution = undefined;
        } catch {
            memoryAttribution = attribution;
        }
    }, [search]);
}

function getNationalNumber(value: string) {
    const phone = value.trim();
    if (!/^\+?[\d\s().-]+$/.test(phone)) return '';

    const digits = phone.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('52')) return digits.slice(2);

    return phone.startsWith('+') ? '' : digits;
}

async function sendValuation(payload: Fields & Attribution) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });
        if (!response.ok) throw new Error('Respuesta HTTP no exitosa.');

        const result: unknown = await response.json();
        if (!result || typeof result !== 'object' || !('success' in result) || result.success !== true) {
            throw new Error('El backend no confirmó el envío.');
        }
    } finally {
        window.clearTimeout(timeout);
    }
}

export function useValuationForm() {
    const [fields, setFields] = useState(initialFields);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState<FormStatus | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submissionInProgress = useRef(false);

    function updateField(field: Field, value: string) {
        setFields((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
        setStatus(null);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submissionInProgress.current) return;
        setStatus(null);

        const name = fields.name.trim();
        const phone = getNationalNumber(fields.phone);
        const email = fields.email.trim();
        const nextErrors: FieldErrors = {};

        if (!name) nextErrors.name = 'Escribe tu nombre completo.';
        else if ([...name].length > 150) nextErrors.name = 'El nombre debe tener 150 caracteres como máximo.';
        if (phone.length !== 10) nextErrors.phone = 'Escribe un número mexicano de 10 dígitos.';
        if ([...email].length > 254 || !emailPattern.test(email)) nextErrors.email = 'Escribe un correo electrónico válido.';
        if (!valuationOptions.includes(fields.property)) nextErrors.property = 'Selecciona un tipo de propiedad.';
        if (!valuationOptions.includes(fields.situation)) nextErrors.situation = 'Selecciona un tipo de situación.';

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setStatus({ type: 'error', message: 'Revisa los campos señalados antes de continuar.' });
            return;
        }

        const payload = { ...fields, name, phone, email, ...readAttribution() };
        submissionInProgress.current = true;
        setIsSubmitting(true);
        try {
            await sendValuation(payload);
            // Integrar formulario_enviado aquí, después de la confirmación del backend y sin datos personales.
            setFields(initialFields);
            setErrors({});
            setStatus({ type: 'success', message: 'Tu solicitud fue enviada correctamente. Un asesor se pondrá en contacto contigo.' });
        } catch {
            setStatus({ type: 'error', message: 'No se pudo enviar la solicitud. Inténtalo de nuevo.' });
        } finally {
            submissionInProgress.current = false;
            setIsSubmitting(false);
        }
    }

    return { fields, errors, status, isSubmitting, updateField, handleSubmit };
}
