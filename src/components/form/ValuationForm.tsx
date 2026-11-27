import IconCartaSobre from '../../assets/images/icons/carta-sobre';
import IconCheckVerde from '../../assets/images/icons/check-verde';
import IconCuadroDialogo from '../../assets/images/icons/cuadro-dialogo';
import IconFlechaDer from '../../assets/images/icons/flecha-der';
import IconManoCasa from '../../assets/images/icons/mano-casa';
import IconUsuario from '../../assets/images/icons/usuario';
import { useValuationForm, valuationOptions } from '../../hooks/useValuationForm';
import styles from '../../styles/modules/form/valuationForm.module.css';

const textFields = [
    { name: 'name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej. Carlos Mendoza López', autoComplete: 'name', Icon: IconUsuario },
    { name: 'phone', label: 'Teléfono', type: 'tel', placeholder: '10 dígitos (ej. 55 1234 5678)', autoComplete: 'tel', Icon: IconCuadroDialogo },
    { name: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'tucorreo@ejemplo.com', autoComplete: 'email', Icon: IconCartaSobre },
] as const;

const selectFields = [
    { name: 'property', label: 'Tipo de Propiedad' },
    { name: 'situation', label: 'Tipo de Situación' },
] as const;

export const ValuationForm = () => {
    const { fields, errors, status, isSubmitting, updateField, handleSubmit } = useValuationForm();

    return (
        <form
            id="formulario-valoracion"
            tabIndex={-1}
            className={styles.form}
            aria-labelledby="valuation-title"
            aria-busy={isSubmitting}
            onSubmit={handleSubmit}
            noValidate
        >
            <header>
                <p className={styles.offer}>Oferta 100% Gratuita</p>
                <h2 id="valuation-title">Solicita tu Valuación Sin Costo ni Compromiso</h2>
                <p>Llena los datos mínimos y recibe una oferta en efectivo sin ningún compromiso de venta.</p>
            </header>

            <div className={styles.fields}>
                {textFields.map(({ name, label, type, placeholder, autoComplete, Icon }) => (
                    <div key={name} className={styles.field}>
                        <label htmlFor={`valuation-${name}`}>{label}</label>
                        <div className={styles.control}>
                            <Icon />
                            <input
                                id={`valuation-${name}`}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                autoComplete={autoComplete}
                                value={fields[name]}
                                onChange={(event) => updateField(name, event.target.value)}
                                required
                                disabled={isSubmitting}
                                aria-invalid={Boolean(errors[name])}
                                aria-describedby={errors[name] ? `valuation-${name}-error` : undefined}
                            />
                        </div>
                        {errors[name] && <p id={`valuation-${name}-error`} className={styles.error}>{errors[name]}</p>}
                    </div>
                ))}

                {selectFields.map(({ name, label }) => (
                    <div key={name} className={styles.field}>
                        <label htmlFor={`valuation-${name}`}>{label}</label>
                        <div className={`${styles.control} ${styles.select}`}>
                            <IconManoCasa />
                            <select
                                id={`valuation-${name}`}
                                name={name}
                                value={fields[name]}
                                onChange={(event) => updateField(name, event.target.value)}
                                required
                                disabled={isSubmitting}
                                aria-invalid={Boolean(errors[name])}
                                aria-describedby={errors[name] ? `valuation-${name}-error` : undefined}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                {valuationOptions.map((option) => <option key={option}>{option}</option>)}
                            </select>
                        </div>
                        {errors[name] && <p id={`valuation-${name}-error`} className={styles.error}>{errors[name]}</p>}
                    </div>
                ))}
            </div>

            <button type="submit" className={styles.submit} disabled={isSubmitting}>
                {isSubmitting ? 'Enviando solicitud…' : 'Solicitar mi valuación'}
                <IconFlechaDer />
            </button>
            <p className={styles.status} role="status">{status}</p>
            <p className={styles.guarantee}><IconCheckVerde /> Sin compromiso de venta ni costos ocultos</p>
        </form>
    );
};
