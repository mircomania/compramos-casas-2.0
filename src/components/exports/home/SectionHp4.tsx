import IconCheckNaranja from '../../../assets/images/icons/check-naranja';
import debtPoster from '../../../assets/videos/video-tes-adeudo.jpg';
import debtWebm from '../../../assets/videos/video-tes-adeudo.webm';
import debtMp4 from '../../../assets/videos/video-tes-adeudo.mp4';
import occupiedPoster from '../../../assets/videos/video-tes-invadida.jpg';
import occupiedWebm from '../../../assets/videos/video-tes-invadida.webm';
import occupiedMp4 from '../../../assets/videos/video-tes-invadida.mp4';
import vandalizedPoster from '../../../assets/videos/video-tes-vandalizada.jpg';
import vandalizedWebm from '../../../assets/videos/video-tes-vandalizada.webm';
import vandalizedMp4 from '../../../assets/videos/video-tes-vandalizada.mp4';
import styles from '../../../styles/modules/home/home4.module.css';
import { VideoPlayer } from '../../common/VideoPlayer';

// Asociaciones provisionales. Confirmar cada video y su atribución antes de publicar.
const testimonials = [
    {
        location: 'CDMX • Notaría 142',
        quote: 'Teníamos 4 años batallando con el juicio de la casa de mis padres. CompramosCasas absorbió los gastos de notaría y en 7 días teníamos la transferencia bancaria lista.',
        name: 'Familia Rodríguez Hernández',
        description: 'Venta de propiedad intestada en Iztapalapa.',
        videoTitle: 'la entrevista del caso de casa invadida',
        poster: occupiedPoster,
        webm: occupiedWebm,
        mp4: occupiedMp4,
    },
    {
        location: 'Monterrey • Notaría 88',
        quote: 'El banco amenazaba con rematar mi casa por falta de pago tras perder mi empleo. Ellos liquidaron mi hipoteca bancaria completa y salí con liquidez en mano.',
        name: 'Ing. Miguel Ángel Garza',
        description: 'Liquidación de crédito bancario en San Nicolás.',
        videoTitle: 'la entrevista del caso de adeudo',
        poster: debtPoster,
        webm: debtWebm,
        mp4: debtMp4,
    },
    {
        location: 'Guadalajara • Notaría 21',
        quote: 'Nos mudamos a Texas y la casa en Tlajomulco fue desvalijada dos veces. Nos daba pánico ir. Hicimos todo con CompramosCasas de manera remota y segura.',
        name: 'Patricia & Roberto Morales',
        description: 'Venta remota de casa vandalizada en Jalisco.',
        videoTitle: 'la entrevista del caso de casa vandalizada',
        poster: vandalizedPoster,
        webm: vandalizedWebm,
        mp4: vandalizedMp4,
    },
];

export const SectionHp4 = () => (
    <section id="testimonios" className="home-section" aria-labelledby="testimonials-title" tabIndex={-1}>
        <div className="home-container">
            <header className="home-intro">
                <p className="home-eyebrow"><IconCheckNaranja /> Testimonios en video</p>
                <h2 id="testimonials-title">Historias Reales de Familias que Vendieron con Éxito</h2>
                <p>Conoce cómo resolvimos situaciones complejas directamente con sus protagonistas frente al Notario.</p>
            </header>

            <div className={styles.cards}>
                {testimonials.map(({ location, quote, name, description, videoTitle, poster, webm, mp4 }) => (
                    <article key={name} className={styles.card}>
                        <VideoPlayer title={videoTitle} poster={poster} webm={webm} mp4={mp4} className={styles.video}>
                            <p className={styles.location}>{location}</p>
                        </VideoPlayer>
                        <div className={styles.content}>
                            <p className={styles.stars} aria-hidden="true">☆☆☆☆☆</p>
                            <blockquote><p>“{quote}”</p></blockquote>
                            <div className={styles.attribution}>
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
