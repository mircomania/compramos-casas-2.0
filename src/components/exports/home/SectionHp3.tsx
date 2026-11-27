import IconBilletera from '../../../assets/images/icons/billetera';
import IconCasaPalos from '../../../assets/images/icons/casa-palos';
import IconCheckCalendario from '../../../assets/images/icons/check-calendario';
import IconCheckVerde from '../../../assets/images/icons/check-verde';
import IconCheckVerde2 from '../../../assets/images/icons/checkl-verde-2';
import IconCuadroPregunta from '../../../assets/images/icons/cuadro-pregunta';
import IconFamilia from '../../../assets/images/icons/familia';
import IconHerramientas from '../../../assets/images/icons/herramientas';
import IconMartilloJuez from '../../../assets/images/icons/martillo-juez';
import IconPlay from '../../../assets/images/icons/play';
import IconTelefono from '../../../assets/images/icons/telefono';
import typesPoster from '../../../assets/videos/videos-tipos-casa.jpg';
import typesWebm from '../../../assets/videos/videos-tipos-casa.webm';
import typesMp4 from '../../../assets/videos/videos-tipos-casa.mp4';
import styles from '../../../styles/modules/home/home3.module.css';
import { SmartLink } from '../../../utils/SmartLink';
import { VideoPlayer } from '../../common/VideoPlayer';

const propertyTypes = [
    {
        title: 'Casas con Adeudos Hipotecarios',
        description: 'Infonavit, Fovissste o crédito bancario en atraso. Liquidamos el saldo total ante el acreedor.',
        indicator: 'Cancelación de hipoteca incluida',
        Icon: IconBilletera,
    },
    {
        title: 'Propiedades Intestadas o en Sucesión',
        description: 'Falta de testamento o herederos en desacuerdo. Nuestro equipo legal asume el costo y gestión del juicio sucesorio para agilizar la venta.',
        indicator: 'Gestión testamentaria integral',
        Icon: IconFamilia,
    },
    {
        title: 'Casas Invadidas o en Litigio',
        description: 'Inmuebles ocupados por terceros de forma irregular o con litigios inconclusos. Compramos los derechos litigiosos y nos hacemos cargo del desalojo formal.',
        indicator: 'Sin que arriesgues tu seguridad',
        Icon: IconMartilloJuez,
    },
    {
        title: 'Vandalizadas',
        description: 'Propiedades desmanteladas, sin puertas, tuberías o cableado, así como construcciones inconclusas sin habitabilidad.',
        indicator: 'No requieres invertir en reparaciones',
        Icon: IconHerramientas,
    },
    {
        title: 'Casas Abandonadas',
        description: '¿Tienes una propiedad que no habitas y sigue generando deudas de hipoteca, predial, agua y servicios? Nosotros nos encargamos de gestionar todo el proceso de manera integral, brindándote acompañamiento en cada etapa.',
        indicator: 'Gestión total del proceso',
        Icon: IconCasaPalos,
    },
];

export const SectionHp3 = () => (
    <section id="tipos" className="home-section" aria-labelledby="property-types-title" tabIndex={-1}>
        <div className="home-container">
            <header className={`home-intro ${styles.intro}`}>
                <p className="home-eyebrow"><IconCheckCalendario /> Cualquier condición jurídica o física</p>
                <h2 id="property-types-title">Tipos de Casas que Compramos Directamente</h2>
                <p>No inviertas dinero en remodelar ni te preocupes por juicios largos. Compramos el inmueble exactamente en las condiciones actuales.</p>
            </header>

            <div className={styles.cards}>
                {propertyTypes.map(({ title, description, indicator, Icon }) => (
                    <article className={styles.card} key={title}>
                        <span className="home-card-icon"><Icon /></span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p className={styles.indicator}>{indicator} <IconCheckVerde /></p>
                    </article>
                ))}

                <article className={`${styles.card} ${styles.contact}`}>
                    <span className="home-card-icon"><IconCuadroPregunta /></span>
                    <h3>¿Tu situación no está en la lista?</h3>
                    <p>Cada inmueble es único. Nuestro equipo de abogados inmobiliarios revisa escrituras, contratos privados y recibos fiscales sin ningún costo para ti.</p>
                    <SmartLink to="/#formulario-valoracion" className={styles.action}>
                        <IconTelefono /> Hablar con un Valuador Legal
                    </SmartLink>
                </article>
            </div>

            <div className={styles.documentary}>
                <div>
                    <p className={styles.documentaryLabel}><IconPlay /> Documental corto</p>
                    <h3>Guía Visual de Propiedades Compradas y Regularizadas</h3>
                    <p>Acompáñanos a recorrer 3 casos reales en Estado de México, Guadalajara y Monterrey donde los dueños obtuvieron su pago de forma ágil y transparente tras años de trabas bancarias.</p>
                    <ul>
                        <li><IconCheckVerde2 /> Liberación de Gravamen Infonavit</li>
                        <li><IconCheckVerde2 /> Liquidación de Impuestos Prediales</li>
                    </ul>
                </div>
                <VideoPlayer
                    title="la guía visual de propiedades"
                    poster={typesPoster}
                    webm={typesWebm}
                    mp4={typesMp4}
                    className={styles.video}
                >
                    <p className={styles.videoLabel}>2 min 31 seg · Casos reales</p>
                </VideoPlayer>
            </div>
        </div>
    </section>
);
