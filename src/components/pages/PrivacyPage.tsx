import styles from '../../styles/modules/secondaryPage.module.css';
import { siteOrigin } from '../../utils/siteSeo';
import { TitleSEO } from '../../utils/TitleSEO';

export default function PrivacyPage() {
    return (
        <main className={styles.page}>
            {/* Quitar metaNoIndex al incorporar y aprobar el contenido definitivo. */}
            <TitleSEO
                title="Aviso de Privacidad | Compramos Casas"
                description="Consulta el aviso de privacidad de Compramos Casas y la información sobre el tratamiento y protección de tus datos personales."
                canonical={siteOrigin + '/politica-privacidad'}
                metaNoIndex={true}
            />
            <h1>Aviso de Privacidad</h1>
        </main>
    );
}
