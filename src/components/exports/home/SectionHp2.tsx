import IconAcelerador from '../../../assets/images/icons/acelerador';
import IconCheckNaranja from '../../../assets/images/icons/check-naranja';
import IconDinero from '../../../assets/images/icons/dinero';
import IconDocDinero from '../../../assets/images/icons/doc-dinero';
import IconDocPluma from '../../../assets/images/icons/doc-pluma';
import IconLapizTexto from '../../../assets/images/icons/lapiz-texto';
import IconLineaGrafico from '../../../assets/images/icons/linea-grafico';
import IconOperador from '../../../assets/images/icons/operador';
import IconPlay from '../../../assets/images/icons/play';
import IconTribunal from '../../../assets/images/icons/tribunal';
import processPoster from '../../../assets/videos/video-proceso.jpg';
import processWebm from '../../../assets/videos/video-proceso.webm';
import processMp4 from '../../../assets/videos/video-proceso.mp4';
import styles from '../../../styles/modules/home/home2.module.css';
import { VideoPlayer } from '../../common/VideoPlayer';

const steps = [
    {
        title: 'Déjanos tus datos',
        description: 'Completa el formulario web o contáctanos por WhatsApp con la información básica y fotos de tu casa.',
        indicator: 'Toma menos de 2 minutos',
        Icon: IconLapizTexto,
        IndicatorIcon: IconAcelerador,
    },
    {
        title: 'Un asesor especializado te contacta',
        description: 'Nuestro experto legal y valuador analiza tu caso particular (adeudos, hipotecas o situación jurídica) sin costo.',
        indicator: 'Diagnóstico jurídico sin costo',
        Icon: IconOperador,
        IndicatorIcon: IconCheckNaranja,
    },
    {
        title: 'Recibes tu oferta',
        description: 'Te presentamos una propuesta económica formal por escrito, en un periodo máximo de 48 horas.',
        indicator: 'Oferta garantizada por escrito',
        Icon: IconDocDinero,
        IndicatorIcon: IconDinero,
    },
    {
        title: 'Firma y cierre del proceso',
        description: 'Formalizamos la compraventa ante Notario Público Colegiado; liquidamos gravámenes y logramos el cierre exitoso de tu proceso.',
        indicator: 'Cierre exitoso ante notario público',
        Icon: IconDocPluma,
        IndicatorIcon: IconTribunal,
    },
];

export const SectionHp2 = () => (
    <section id="funciona" className="home-section" aria-labelledby="process-title" tabIndex={-1}>
        <div className="home-container">
            <header className="home-intro">
                <p className={`home-eyebrow ${styles.eyebrow}`}><IconLineaGrafico /> Flujo simple y seguro</p>
                <h2 id="process-title" className={styles.heading}>Nuestro Proceso en 4 Pasos Clave</h2>
            </header>

            <ol className={styles.steps}>
                {steps.map(({ title, description, indicator, Icon, IndicatorIcon }, index) => (
                    <li key={title} className={styles.step}>
                        <div className={styles.stepTop}>
                            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            <span className="home-card-icon"><Icon /></span>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p className={styles.indicator}><IndicatorIcon /> {indicator}</p>
                    </li>
                ))}
            </ol>

            <VideoPlayer
                title="el video del proceso de compra"
                poster={processPoster}
                webm={processWebm}
                mp4={processMp4}
                className={styles.video}
            >
                <div className={styles.caption}>
                    <p className={styles.videoLabel}><IconPlay /> Video Explicativo Oficial · 2 min 11 seg</p>
                    <h3>Mira en video cómo es el proceso paso a paso</h3>
                    <p>Conoce el protocolo legal ante notario y la entrega del pago sin intermediarios.</p>
                </div>
            </VideoPlayer>
        </div>
    </section>
);
