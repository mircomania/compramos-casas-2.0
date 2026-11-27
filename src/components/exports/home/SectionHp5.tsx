import IconDineroNo from '../../../assets/images/icons/dinero-no';
import IconDocCurva from '../../../assets/images/icons/doc-curva';
import IconMartilloJuez from '../../../assets/images/icons/martillo-juez';
import IconPreguntaCirculo from '../../../assets/images/icons/pregunta-circulo';
import styles from '../../../styles/modules/home/home5.module.css';

const questions = [
    {
        title: '¿Cobran comisiones inmobiliarias o adelantos de dinero?',
        answer: 'No. Somos compradores directos con capital propio, no una agencia inmobiliaria o intermediario. No cobramos comisión por venta, ni porcentajes de corretaje, ni anticipos por investigación o valuación. El monto pactado en la oferta formal es exactamente la cantidad neta que recibes en tu cuenta.',
        Icon: IconDineroNo,
    },
    {
        title: '¿Qué ocurre si la propiedad debe agua, luz, predial o Infonavit?',
        answer: 'Compramos inmuebles con gravámenes o adeudos. Nuestro equipo jurídico calcula el monto total adeudado ante el Infonavit, Fovissste, banco, etc., y nosotros liquidamos los adeudos directamente en el proceso notarial descontándolos de manera transparente del valor total pactado.',
        Icon: IconDocCurva,
    },
    {
        title: '¿Cómo se garantiza la validez legal de la compraventa?',
        answer: 'Toda operación se formaliza con estricto apego a la ley mexicana mediante Escritura Pública ante Notario Público Colegiado con fe pública. El notario verifica la identidad de las partes, el certificado de libertad de gravamen y la regularidad fiscal del predio, cumpliendo con la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI).',
        Icon: IconMartilloJuez,
    },
];

export const SectionHp5 = () => (
    <section id="preguntas" className="home-section" aria-labelledby="faq-title" tabIndex={-1}>
        <div className="home-container">
            <header className="home-intro">
                <p className={`home-eyebrow ${styles.eyebrow}`}><IconPreguntaCirculo /> Claridad total</p>
                <h2 id="faq-title" className={styles.heading}>Preguntas Frecuentes</h2>
                <p>Todo lo que necesitas saber sobre plazos, honorarios, impuestos y formalización legal.</p>
            </header>
            <div className={styles.questions}>
                {questions.map(({ title, answer, Icon }) => (
                    <details key={title} className={styles.question}>
                        <summary><Icon /> <span>{title}</span></summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);
