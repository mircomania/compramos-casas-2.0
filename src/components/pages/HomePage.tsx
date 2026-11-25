import { TitleSEO } from '../../utils/TitleSEO';

import { SectionHp1 } from '../exports/home/SectionHp1';
import { SectionHp2 } from '../exports/home/SectionHp2';
import { SectionHp3 } from '../exports/home/SectionHp3';
import { SectionHp4 } from '../exports/home/SectionHp4';
import { SectionHp5 } from '../exports/home/SectionHp5';
import { SectionHp6 } from '../exports/home/SectionHp6';

export function HomePage() {
    return (
        <main>
            <TitleSEO title="Compramos Casas" description="" canonical="" />

            <SectionHp1 />

            <section id="funciona">
                <SectionHp2 />
            </section>

            <section id="tipos">
                <SectionHp3 />
            </section>

            <section id="testimonios">
                <SectionHp4 />
            </section>

            <section id="preguntas">
                <SectionHp5 />
            </section>

            <section id="oficinas">
                <SectionHp6 />
            </section>
        </main>
    );
}
