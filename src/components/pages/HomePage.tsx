import { TitleSEO } from '../../utils/TitleSEO';

import { SectionHp1 } from '../exports/home/SectionHp1';
import { SectionHp2 } from '../exports/home/SectionHp2';
import { SectionHp3 } from '../exports/home/SectionHp3';
import { SectionHp4 } from '../exports/home/SectionHp4';
import { SectionHp5 } from '../exports/home/SectionHp5';
import { SectionHp6 } from '../exports/home/SectionHp6';

export function HomePage() {
    return (
        <main className="home">
            {/* Pendiente de aprobación: descripción y URL canónica de producción. */}
            <TitleSEO title="Compramos Casas" description="" canonical="" />

            <SectionHp1 />
            <SectionHp2 />
            <SectionHp3 />
            <SectionHp4 />
            <SectionHp5 />
            <SectionHp6 />
        </main>
    );
}
