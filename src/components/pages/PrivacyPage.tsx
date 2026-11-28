import IconEscudoCheck from '../../assets/images/icons/escudo-check';
import styles from '../../styles/modules/secondaryPage.module.css';
import { privacyAddress, privacyContactEmail, privacyNoticePath } from '../../utils/privacyNotice';
import { siteOrigin } from '../../utils/siteSeo';
import { TitleSEO } from '../../utils/TitleSEO';

const lastUpdated: string | null = null;

const sections = [
    {
        id: 'identidad-y-domicilio',
        title: 'Identidad y domicilio del responsable',
        content: (
            <>
                <p>Pro Consultores, en adelante «Compramos Casas», con domicilio en {privacyAddress}, es responsable del tratamiento y protección de los datos personales recabados a través del sitio web <a href={siteOrigin + '/'}>{siteOrigin}/</a>.</p>
                <p>
                    El presente Aviso de Privacidad se emite de conformidad con la Ley Federal de Protección de Datos Personales en
                    Posesión de los Particulares y demás disposiciones aplicables en los Estados Unidos Mexicanos.
                </p>
                <p>
                    Para cualquier asunto relacionado con el tratamiento de sus datos personales, usted podrá comunicarse mediante
                    el correo electrónico:
                </p>
                <p><a href={'mailto:' + privacyContactEmail}>{privacyContactEmail}</a></p>
            </>
        ),
    },
    {
        id: 'datos-personales',
        title: 'Datos personales que recabamos',
        content: (
            <>
                <p>
                    Para atender las solicitudes de información, valuación y compraventa de inmuebles, podremos recabar los
                    siguientes datos personales:
                </p>
                <h3>Datos de identificación y contacto</h3>
                <ul>
                    <li>Nombre completo.</li>
                    <li>Número de teléfono.</li>
                    <li>Correo electrónico.</li>
                </ul>
                <h3>Datos patrimoniales</h3>
                <ul>
                    <li>Tipo de propiedad.</li>
                    <li>Situación física, jurídica, hipotecaria o financiera del inmueble, según la información proporcionada por usted.</li>
                </ul>
                <p>
                    El tratamiento de estos datos patrimoniales tendrá como finalidad conocer las características generales del
                    inmueble y determinar la viabilidad de una eventual operación de compraventa.
                </p>
                <h3>Datos de navegación y atribución publicitaria</h3>
                <ul>
                    <li>Fuente, medio y campaña de procedencia.</li>
                    <li>Información técnica relacionada con el navegador y dispositivo utilizado.</li>
                    <li>Dirección IP e información general de navegación, cuando corresponda.</li>
                    <li>Interacciones con el sitio web.</li>
                    <li>Identificadores asociados a tecnologías de medición y publicidad, cuando dichas herramientas se encuentren habilitadas.</li>
                </ul>
                <p>
                    El formulario de valuación no solicita datos personales sensibles, contraseñas, información de tarjetas
                    bancarias ni credenciales de acceso a servicios financieros.
                </p>
                <p>
                    En caso de que una operación inmobiliaria requiera posteriormente documentación o información adicional, se
                    informará al titular sobre su tratamiento y se obtendrá el consentimiento correspondiente cuando resulte
                    legalmente necesario.
                </p>
            </>
        ),
    },
    {
        id: 'finalidades',
        title: 'Finalidades del tratamiento',
        content: (
            <>
                <p>Los datos personales proporcionados serán utilizados para las siguientes finalidades necesarias:</p>
                <ul>
                    <li>Recibir, registrar y atender solicitudes de información y valuación de inmuebles.</li>
                    <li>Establecer comunicación con las personas interesadas mediante teléfono o correo electrónico.</li>
                    <li>Conocer las características y condiciones generales de la propiedad.</li>
                    <li>Evaluar la viabilidad de una posible operación de compraventa.</li>
                    <li>Proporcionar información sobre los servicios y procedimientos ofrecidos por Compramos Casas.</li>
                    <li>Dar seguimiento a las solicitudes, propuestas y negociaciones iniciadas por el titular.</li>
                    <li>Mantener un registro administrativo de las solicitudes recibidas.</li>
                    <li>Atender obligaciones legales y requerimientos de autoridades competentes, cuando corresponda.</li>
                </ul>
                <p>Adicionalmente, podremos tratar información de navegación para las siguientes finalidades secundarias:</p>
                <ul>
                    <li>Elaborar estadísticas sobre el funcionamiento y uso del sitio web.</li>
                    <li>Identificar el origen de las solicitudes recibidas.</li>
                    <li>Medir el rendimiento de nuestras campañas publicitarias.</li>
                    <li>Mejorar la experiencia de navegación y los servicios ofrecidos.</li>
                </ul>
                <p>Estas finalidades secundarias no son indispensables para solicitar una valuación.</p>
                <p>
                    Los datos de contacto proporcionados mediante el formulario no serán utilizados para enviar boletines,
                    publicidad no solicitada ni promociones comerciales ajenas a la solicitud realizada.
                </p>
                <p>
                    Usted podrá manifestar su negativa al tratamiento para finalidades secundarias mediante el correo electrónico
                    indicado en este aviso, sin que ello impida la atención de su solicitud de valuación.
                </p>
            </>
        ),
    },
    {
        id: 'consentimiento',
        title: 'Consentimiento para el tratamiento de datos personales',
        indexLabel: 'Consentimiento',
        content: (
            <>
                <p>Antes de enviar una solicitud de valuación, el titular tendrá acceso al presente Aviso de Privacidad.</p>
                <p>
                    Cuando el tratamiento comprenda datos personales patrimoniales o financieros, se solicitará el consentimiento
                    expreso del titular mediante una manifestación electrónica de su voluntad.
                </p>
                <p>
                    El otorgamiento del consentimiento no implica la aceptación de una oferta económica, la celebración de un
                    contrato, la autorización para disponer de un inmueble ni la adquisición de obligaciones relacionadas con su
                    compraventa.
                </p>
                <p>
                    El consentimiento podrá ser revocado conforme a los procedimientos establecidos en este aviso y a las
                    disposiciones legales aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'almacenamiento-y-conservacion',
        title: 'Almacenamiento y conservación de los datos',
        indexLabel: 'Almacenamiento y conservación',
        content: (
            <>
                <p>
                    Los datos personales recabados mediante el formulario podrán ser almacenados en plataformas tecnológicas
                    utilizadas por Compramos Casas para administrar y dar seguimiento a las solicitudes recibidas.
                </p>
                <p>La información se conservará, como regla general, durante un periodo de hasta 12 meses contados desde su recopilación.</p>
                <p>
                    Cuando exista una negociación activa, una relación contractual o un procedimiento relacionado con la solicitud,
                    los datos podrán conservarse durante el tiempo adicional necesario para atender dichas circunstancias.
                </p>
                <p>
                    La información también podrá conservarse durante los plazos exigidos por disposiciones legales aplicables o
                    cuando sea necesaria para determinar responsabilidades derivadas de su tratamiento.
                </p>
                <p>
                    Una vez que los datos dejen de ser necesarios, se procederá a su bloqueo, cuando corresponda, y posterior
                    supresión conforme a la legislación aplicable.
                </p>
            </>
        ),
    },
    {
        id: 'proveedores-y-transferencias',
        title: 'Proveedores tecnológicos y transferencias de datos',
        indexLabel: 'Proveedores tecnológicos y transferencias',
        content: (
            <>
                <p>Compramos Casas no vende, alquila ni comercializa los datos personales proporcionados por los usuarios.</p>
                <p>
                    Tampoco transfiere ordinariamente la información de las solicitudes de valuación a otras empresas para que
                    estas la utilicen con fines comerciales propios.
                </p>
                <p>
                    Para el funcionamiento del sitio y la gestión de solicitudes, utilizamos proveedores tecnológicos que pueden
                    intervenir en el tratamiento de información, entre ellos:
                </p>
                <h3>Airtable</h3>
                <p>Plataforma utilizada para almacenar y administrar las solicitudes de valuación recibidas a través del sitio web.</p>
                <h3>Servicios de alojamiento web</h3>
                <p>Infraestructura tecnológica utilizada para publicar el sitio, procesar las solicitudes y mantener su funcionamiento.</p>
                <h3>Google Maps</h3>
                <p>Servicio utilizado para mostrar la ubicación de nuestras oficinas y facilitar las indicaciones de llegada.</p>
                <h3>Servicios de medición y publicidad de Google</h3>
                <p>
                    Cuando estén habilitados, Google Tag Manager, Google Analytics 4 y Google Ads podrán intervenir en la gestión
                    de etiquetas, medición de visitas y evaluación del rendimiento publicitario.
                </p>
                <p>Estos proveedores pueden utilizar infraestructura ubicada dentro o fuera de México.</p>
                <p>
                    Cuando actúen como encargados del tratamiento, deberán procesar la información conforme a las instrucciones del
                    responsable y a las condiciones jurídicas aplicables.
                </p>
                <p>
                    Los servicios de terceros que traten información para sus propias finalidades podrán estar sujetos
                    adicionalmente a sus respectivos avisos de privacidad.
                </p>
                <p>
                    Cuando una eventual operación inmobiliaria requiera comunicar datos a notarías, autoridades, instituciones
                    financieras u otros terceros, dicha comunicación se realizará conforme a la legislación aplicable y se
                    informará al titular y solicitará su consentimiento cuando sea necesario.
                </p>
            </>
        ),
    },
    {
        id: 'derechos-arco',
        title: 'Derechos de acceso, rectificación, cancelación y oposición (ARCO)',
        indexLabel: 'Derechos ARCO',
        content: (
            <>
                <p>El titular de los datos personales tiene derecho a:</p>
                <ul>
                    <li><strong>Acceso:</strong> conocer qué datos personales se encuentran en posesión de Compramos Casas y las condiciones de su tratamiento.</li>
                    <li><strong>Rectificación:</strong> solicitar la corrección de información inexacta, incompleta o desactualizada.</li>
                    <li><strong>Cancelación:</strong> solicitar que sus datos personales dejen de ser tratados y sean eliminados cuando legalmente proceda.</li>
                    <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos personales en los supuestos previstos por la legislación aplicable.</li>
                </ul>
                <p>Para ejercer cualquiera de estos derechos, deberá enviar una solicitud al correo electrónico:</p>
                <p><a href={'mailto:' + privacyContactEmail}>{privacyContactEmail}</a></p>
                <p>Se recomienda indicar en el asunto del correo: «Solicitud de Derechos ARCO».</p>
                <p>La solicitud deberá incluir:</p>
                <ul>
                    <li>Nombre del titular.</li>
                    <li>Medio de contacto para recibir la respuesta.</li>
                    <li>Información o documentación necesaria para acreditar su identidad o, en su caso, la representación legal correspondiente.</li>
                    <li>Descripción clara de los datos personales respecto de los cuales desea ejercer algún derecho.</li>
                    <li>Derecho que desea ejercer.</li>
                    <li>Información adicional que facilite la localización de sus datos personales.</li>
                </ul>
                <p>
                    En caso de solicitar una rectificación, deberá indicar las modificaciones requeridas y proporcionar la
                    documentación que resulte pertinente.
                </p>
                <p>
                    La determinación correspondiente será comunicada dentro de un plazo máximo de 20 días hábiles contados desde la
                    recepción de la solicitud.
                </p>
                <p>
                    Si la solicitud resulta procedente, se hará efectiva dentro de los 15 días hábiles siguientes a la comunicación
                    de la respuesta.
                </p>
                <p>Estos plazos podrán ampliarse en los supuestos y condiciones previstos por la legislación aplicable.</p>
                <p>
                    El ejercicio de los derechos ARCO será gratuito, sin perjuicio de los gastos de reproducción o envío que
                    legalmente pudieran corresponder.
                </p>
            </>
        ),
    },
    {
        id: 'revocacion',
        title: 'Revocación del consentimiento',
        content: (
            <>
                <p>
                    Usted podrá solicitar la revocación del consentimiento otorgado para el tratamiento de sus datos personales
                    mediante el correo electrónico:
                </p>
                <p><a href={'mailto:' + privacyContactEmail}>{privacyContactEmail}</a></p>
                <p>
                    La solicitud deberá identificar al titular, indicar el tratamiento respecto del cual desea revocar su
                    consentimiento y proporcionar la información necesaria para su atención.
                </p>
                <p>La revocación no tendrá efectos retroactivos.</p>
                <p>
                    En determinados casos, no será posible concluir inmediatamente el tratamiento cuando exista una obligación
                    legal, contractual o alguna otra circunstancia prevista por la legislación aplicable que requiera conservar la
                    información.
                </p>
            </>
        ),
    },
    {
        id: 'limitacion',
        title: 'Limitación del uso o divulgación de los datos personales',
        indexLabel: 'Limitación del uso o divulgación',
        content: (
            <>
                <p>
                    El titular podrá solicitar que se limite el uso o divulgación de sus datos personales, incluyendo la suspensión
                    de comunicaciones relacionadas con solicitudes anteriores o tratamientos para finalidades secundarias.
                </p>
                <p>Para ello, deberá enviar su solicitud al correo electrónico:</p>
                <p><a href={'mailto:' + privacyContactEmail}>{privacyContactEmail}</a></p>
                <p>Compramos Casas atenderá estas solicitudes de conformidad con las disposiciones legales aplicables.</p>
            </>
        ),
    },
    {
        id: 'cookies-y-seguimiento',
        title: 'Cookies, almacenamiento local y tecnologías de seguimiento',
        indexLabel: 'Cookies y tecnologías de seguimiento',
        content: (
            <>
                <p>
                    El sitio web utiliza o podrá utilizar tecnologías que permitan conocer su funcionamiento, facilitar
                    determinadas funcionalidades y medir el rendimiento de las campañas publicitarias.
                </p>
                <h3>Almacenamiento local</h3>
                <p>El sitio utiliza LocalStorage para conservar temporalmente información relacionada con el origen de las visitas.</p>
                <p>Esta información puede incluir:</p>
                <ul>
                    <li>Fuente de procedencia (utm_source).</li>
                    <li>Medio de procedencia (utm_medium).</li>
                    <li>Campaña publicitaria (utm_campaign).</li>
                    <li>Fecha de registro de la atribución.</li>
                </ul>
                <p>
                    La vigencia de esta información es de 15 días. Una vez vencido dicho periodo, los datos dejan de utilizarse y
                    se eliminan al realizar la correspondiente comprobación de vigencia.
                </p>
                <p>Los datos personales introducidos en el formulario de valuación no se almacenan mediante este mecanismo.</p>
                <h3>Cookies y herramientas de medición</h3>
                <p>
                    Cuando se encuentren habilitadas, las siguientes herramientas podrán utilizar cookies, etiquetas,
                    identificadores y tecnologías similares:
                </p>
                <ul>
                    <li>Google Tag Manager.</li>
                    <li>Google Analytics 4.</li>
                    <li>Google Ads.</li>
                    <li>Google Maps.</li>
                </ul>
                <p>
                    Estas tecnologías pueden recopilar información técnica del dispositivo, navegador, actividad de navegación,
                    origen de las visitas e interacciones con el sitio web.
                </p>
                <p>
                    Su finalidad consiste en proporcionar funcionalidades, elaborar estadísticas, medir resultados publicitarios y
                    mejorar el funcionamiento del sitio.
                </p>
                <h3>Administración de estas tecnologías</h3>
                <p>
                    Usted podrá limitar, bloquear o eliminar cookies y datos de almacenamiento local mediante las opciones de
                    configuración de su navegador.
                </p>
                <p>Asimismo, podrá utilizar los mecanismos de administración de privacidad ofrecidos por Google:</p>
                <ul>
                    <li>Política de Privacidad: <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=es</a></li>
                    <li>Configuración de anuncios: <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">https://myadcenter.google.com/</a></li>
                    <li>Complemento de inhabilitación de Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></li>
                </ul>
                <p>
                    La restricción de determinadas tecnologías puede afectar algunas funcionalidades complementarias del sitio, sin
                    impedir por sí misma la posibilidad de solicitar una valuación.
                </p>
            </>
        ),
    },
    {
        id: 'seguridad-y-confidencialidad',
        title: 'Seguridad y confidencialidad',
        content: (
            <>
                <p>
                    Compramos Casas deberá establecer y mantener medidas de seguridad administrativas, técnicas y físicas
                    apropiadas para proteger los datos personales contra accesos no autorizados, pérdida, alteración, destrucción o
                    tratamiento indebido.
                </p>
                <p>
                    El acceso a la información deberá limitarse al personal y proveedores autorizados que requieran conocerla para
                    el cumplimiento de las finalidades descritas en este aviso.
                </p>
                <p>
                    En caso de que ocurra una vulneración de seguridad que afecte significativamente los derechos patrimoniales o
                    morales de los titulares, se informará a las personas afectadas conforme a las disposiciones legales
                    aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'cambios-al-aviso',
        title: 'Cambios al Aviso de Privacidad',
        content: (
            <>
                <p>
                    El presente Aviso de Privacidad podrá modificarse como consecuencia de cambios legislativos, modificaciones en
                    nuestros servicios, incorporación de nuevas tecnologías o actualizaciones en los procedimientos de tratamiento
                    de datos personales.
                </p>
                <p>La versión vigente estará disponible permanentemente en:</p>
                <p><a href={siteOrigin + privacyNoticePath}>{siteOrigin + privacyNoticePath}</a></p>
                <p>
                    Cuando las modificaciones impliquen nuevas finalidades o tratamientos que requieran consentimiento adicional,
                    se informará al titular y se solicitará dicho consentimiento conforme a la legislación aplicable.
                </p>
            </>
        ),
    },
    {
        id: 'contacto',
        title: 'Contacto',
        content: (
            <>
                <p>
                    Para consultas, solicitudes o aclaraciones relacionadas con el tratamiento de sus datos personales, podrá
                    comunicarse con nosotros mediante los siguientes medios:
                </p>
                <p><strong>Responsable:</strong> Pro Consultores.</p>
                <p><strong>Nombre comercial:</strong> Compramos Casas.</p>
                <p><strong>Domicilio:</strong> {privacyAddress}.</p>
                <p><strong>Correo electrónico:</strong> <a href={'mailto:' + privacyContactEmail}>{privacyContactEmail}</a>.</p>
                <p><strong>Sitio web:</strong> <a href={siteOrigin + '/'}>{siteOrigin}/</a>.</p>
            </>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <main className={`${styles.page} ${styles.legalPage}`} aria-labelledby="privacy-title">
            {/* Al aprobar el aviso, definir la fecha, quitar el noindex y añadir la URL al sitemap. */}
            <TitleSEO
                title="Aviso de Privacidad | Compramos Casas"
                description="Conoce cómo Compramos Casas y Pro Consultores recopilan, utilizan y protegen tus datos personales, así como los mecanismos para ejercer tus derechos ARCO."
                canonical={siteOrigin + privacyNoticePath}
                metaNoIndex={true}
            />

            <div className={styles.legalContainer}>
                <header className={styles.legalHeader}>
                    <p className={styles.legalLabel}><IconEscudoCheck /> Información legal</p>
                    <h1 className={styles.legalTitle} id="privacy-title">Aviso de Privacidad Integral</h1>
                    <p className={styles.legalSubtitle}>Compramos Casas | Pro Consultores</p>
                    {lastUpdated && (
                        <p className={styles.legalDate}>
                            Última actualización{' '}
                            <time dateTime={lastUpdated}>
                                {new Intl.DateTimeFormat('es-MX', { dateStyle: 'long', timeZone: 'UTC' })
                                    .format(new Date(lastUpdated + 'T00:00:00Z'))}
                            </time>
                        </p>
                    )}
                </header>

                <nav className={styles.legalIndex} aria-labelledby="privacy-index-title">
                    <p id="privacy-index-title">Índice de contenidos</p>
                    <ol>
                        {sections.map(({ id, title, indexLabel }) => (
                            <li key={id}><a href={`#${id}`}>{indexLabel ?? title}</a></li>
                        ))}
                    </ol>
                </nav>

                <div className={styles.legalContent}>
                    {sections.map(({ id, title, content }, index) => (
                        <section className={styles.legalSection} id={id} key={id} aria-labelledby={`${id}-titulo`} tabIndex={-1}>
                            <h2 id={`${id}-titulo`}>{index + 1}. {title}</h2>
                            {content}
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
