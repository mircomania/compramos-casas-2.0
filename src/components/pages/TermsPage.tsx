import styles from '../../styles/modules/secondaryPage.module.css';
import { siteOrigin } from '../../utils/siteSeo';
import { TitleSEO } from '../../utils/TitleSEO';

export default function TermsPage() {
    return (
        <main className={styles.page}>
            {/* Quitar metaNoIndex al incorporar y aprobar el contenido definitivo. */}
            <TitleSEO
                title="Términos y Condiciones | Compramos Casas"
                description="Conoce los términos y condiciones de uso del sitio web y los servicios de compra directa de inmuebles de Compramos Casas."
                canonical={siteOrigin + '/terminos-servicios'}
                metaNoIndex={true}
            />
            <h1>Términos y Condiciones</h1>
        </main>
    );
}
