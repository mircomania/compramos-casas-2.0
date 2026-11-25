import { SmartLink } from '../../utils/SmartLink';
import { NavItems } from '../utils/NavItems';

import { footerMenu } from '../utils/footerMenu';

import logo from '../../assets/images/common/logo.svg';

export function Footer() {
    return (
        <footer className="footer">
            <SmartLink to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn">
                <img src={logo} alt="Logotipo de Compramos Casas en el pie de página" loading="lazy" decoding="async" />
            </SmartLink>

            <div className="footer-contenido">
                <p>
                    © 2026 CompramosCasas.com.mx - Todos los derechos reservados. <br />
                    Plataforma inmobiliaria autorizada.
                </p>

                <ul>
                    {footerMenu.map((item) => (
                        <li key={item.id}>
                            <NavItems item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
