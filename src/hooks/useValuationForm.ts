import { useState } from 'react';
import type { FormEvent } from 'react';

const initialFields = {
    name: '',
    phone: '',
    email: '',
    property: '',
    situation: '',
};

type Fields = typeof initialFields;
type Field = keyof Fields;
type FieldErrors = Partial<Record<Field, string>>;

export const valuationOptions = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

function getNationalNumber(value: string) {
    const phone = value.trim();
    if (!/^\+?[\d\s().-]+$/.test(phone)) return '';

    const digits = phone.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('52')) return digits.slice(2);

    return phone.startsWith('+') ? '' : digits;
}

export function useValuationForm(sendValuation?: (fields: Fields) => Promise<void>) {
    const [fields, setFields] = useState(initialFields);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    function updateField(field: Field, value: string) {
        setFields((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
        setStatus('');
    }

    function resetForm() {
        setFields(initialFields);
        setErrors({});
        setStatus('');
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isSubmitting) return;

        const name = fields.name.trim();
        const phone = getNationalNumber(fields.phone);
        const email = fields.email.trim();
        const nextErrors: FieldErrors = {};

        if (!name) nextErrors.name = 'Escribe tu nombre completo.';
        if (phone.length !== 10) nextErrors.phone = 'Escribe un número mexicano de 10 dígitos.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Escribe un correo electrónico válido.';
        if (!valuationOptions.includes(fields.property)) nextErrors.property = 'Selecciona un tipo de propiedad.';
        if (!valuationOptions.includes(fields.situation)) nextErrors.situation = 'Selecciona un tipo de situación.';

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setStatus('Revisa los campos señalados antes de continuar.');
            return;
        }

        // Conectar aquí el servicio de envío cuando esté disponible.
        if (!sendValuation) {
            setStatus('El envío aún no está disponible.');
            return;
        }

        setIsSubmitting(true);
        setStatus('');
        try {
            await sendValuation({ ...fields, name, phone, email });
            resetForm();
        } catch {
            setStatus('No se pudo enviar la solicitud. Inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return { fields, errors, status, isSubmitting, updateField, handleSubmit };
}
