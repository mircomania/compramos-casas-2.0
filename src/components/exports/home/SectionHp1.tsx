import mascot from '../../../assets/images/home/hero-personaje-1.png';
import advisor from '../../../assets/images/home/hero-personaje-2.png';
import IconEscudoCheck from '../../../assets/images/icons/escudo-check';
import styles from '../../../styles/modules/home/home1.module.css';
import { ValuationForm } from '../../form/ValuationForm';

export const SectionHp1 = () => (
    <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`home-container ${styles.layout}`}>
            <div className={styles.copy}>
                <p className="home-eyebrow"><IconEscudoCheck /> Compra directa y liquidez notarial en México</p>
                <h1 id="hero-title">Compramos tu Casa de <em>Forma Ágil y Segura</em></h1>
                <p className={styles.description}>
                    Sin intermediarios y sin importar la situación física o legal del inmueble. Resolvemos adeudos bancarios,
                    Infonavit y sucesiones intestamentarias con total seguridad notarial.
                </p>
            </div>

            <ValuationForm />

            <div className={styles.reassurance}>
                <div className={styles.advice}>
                    <div className={styles.avatar}>
                        <img src={advisor} width="62" height="74" alt="" />
                    </div>
                    <div>
                        <p className={styles.adviceLabel}>Acompañamiento 1 a 1</p>
                        <p className={styles.adviceTitle}>Tu asesor personal de confianza</p>
                        <p>Te guiamos de principio a fin, resolviendo dudas jurídicas y acelerando tu pago.</p>
                    </div>
                </div>

                <dl className={styles.stats}>
                    <div>
                        <dt>Propiedades adquiridas</dt>
                        <dd>+500</dd>
                    </div>
                    <div>
                        <dt>Firma ante Notario Colegiado</dt>
                        <dd>100%</dd>
                    </div>
                </dl>

                <img className={styles.mascot} src={mascot} width="189" height="425" alt="" />
            </div>
        </div>
    </section>
);
