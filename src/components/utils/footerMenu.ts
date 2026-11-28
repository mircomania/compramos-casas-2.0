import type { NavItem } from '../../types/navigation';

export const footerMenu: NavItem[] = [
    {
        id: 'privacidad',
        to: '/politica-privacidad',
        label: 'Aviso de Privacidad',
        title: 'Conoce la politica de privacidad',
        dataLink: 'footer-privacidad-link',
        type: 'route',
    },
    {
        id: 'terminos',
        to: '/terminos-servicios',
        label: 'Términos y Condiciones',
        title: 'Conoce los terminos y servicios',
        dataLink: 'footer-terminos-link',
        type: 'route',
    },
];
