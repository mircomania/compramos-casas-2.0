import styles from '../../styles/modules/secondaryPage.module.css';
import { siteOrigin } from '../../utils/siteSeo';
import { TitleSEO } from '../../utils/TitleSEO';

export default function NotarialSecurityPage() {
    return (
        <main className={styles.page}>
            {/* Quitar metaNoIndex al incorporar y aprobar el contenido definitivo. */}
            <TitleSEO
                title="Seguridad Notarial | Compramos Casas"
                description="Conoce cómo Compramos Casas formaliza el proceso de compraventa de inmuebles ante notario público en México."
                canonical={siteOrigin + '/seguridad-notarial'}
                metaNoIndex={true}
            />
            <h1>Seguridad Notarial</h1>
        </main>
    );
}
