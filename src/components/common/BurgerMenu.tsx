import { BurgerIcon } from '../../assets/icons/BurgerIcon';
import logo from '../../assets/images/common/logo.svg';

import { useBurgerMenu } from '../../hooks/useBurgerMenu';

import { navbarMenu } from '../utils/navbarMenu';
import { NavItems } from '../utils/NavItems';
import { BotonNav } from '../utils/BotonNav';

export const BurgerMenu = () => {
    const { isOpen, toggleMenu, closeMenu, menuRef } = useBurgerMenu();

    return (
        <nav aria-label="Menu de navegación móvil" ref={menuRef}>
            <button
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                className={`burger-menu-container ${isOpen ? 'open' : ''}`}
                type="button"
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
                <BurgerIcon className="burger-menu-icon" decorative />
            </button>

            <div id="mobile-menu" className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <BotonNav to="/" className="boton-nav" dataCta="burger-inicio-btn" onAfterNavigate={closeMenu}>
                            Inicio
                        </BotonNav>
                    </li>

                    {navbarMenu.map((item) => (
                        <li key={item.id}>
                            <NavItems item={item} onAfterNavigate={closeMenu} />
                        </li>
                    ))}
                </ul>

                <div className="bottom-burger-container">
                    <img className="logo-burger" src={logo} alt="Logotipo de Compramos Casas" loading="lazy" decoding="async" />
                </div>
            </div>
        </nav>
    );
};
