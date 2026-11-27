import IconDireccion from '../../../assets/images/icons/direccion';
import IconEdificio from '../../../assets/images/icons/edificio';
import IconReloj from '../../../assets/images/icons/reloj';
import IconUbicacion from '../../../assets/images/icons/ubicacion';
import styles from '../../../styles/modules/home/home6.module.css';

const offices = [
    {
        region: 'Estado de México',
        name: 'Naucalpan de Juárez',
        address: ['Av. Primero de Mayo No. 15, Piso 12,', 'Oficina 1220, C.P. 53500,', 'Naucalpan de Juárez, Estado de México.'],
        mapAddress: 'Av. Primero de Mayo 15, 53500 Naucalpan de Juárez, Estado de México, México',
        hours: 'Lun - Vie: 8:30 AM - 6:30 PM',
    },
    {
        region: 'Nuevo León',
        name: 'Monterrey',
        address: ['Emilio Carranza 732, Centro,', '64000 Monterrey, N.L.'],
        mapAddress: 'Emilio Carranza Sur 732, Centro, 64000 Monterrey, Nuevo León, México',
        hours: 'Lun - Vie: 9:00 AM - 6:30 PM',
    },
];

export const SectionHp6 = () => (
    <section id="oficinas" className="home-section" aria-labelledby="offices-title" tabIndex={-1}>
        <div className="home-container">
            <header className="home-intro">
                <p className="home-eyebrow"><IconEdificio /> Presencia física nacional</p>
                <h2 id="offices-title">Nuestras Oficinas y Cobertura</h2>
                <p>Atención personalizada en los principales polos económicos del país y visitas técnicas a domicilio en más de 20 estados.</p>
            </header>

            <div className={styles.offices}>
                {offices.map(({ region, name, address, mapAddress, hours }) => {
                    const destination = encodeURIComponent(mapAddress);

                    return (
                        <article className={styles.office} key={name}>
                            <iframe
                                src={`https://maps.google.com/maps?q=${destination}&z=15&output=embed`}
                                title={`Mapa de la oficina de ${name}`}
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                            <div className={styles.content}>
                                <p className={styles.label}><IconUbicacion /> Sede corporativa {region}</p>
                                <h3>{name}</h3>
                                <address>{address.map((line) => <span key={line}>{line}</span>)}</address>
                                <p className={styles.hours}><IconReloj /> {hours}</p>
                                <a
                                    className={styles.directions}
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Cómo llegar a la oficina de ${name} (Google Maps, nueva pestaña)`}
                                >
                                    <IconDireccion /> Cómo llegar (Google Maps)
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    </section>
);
