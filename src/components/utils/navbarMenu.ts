import type { NavItem } from '../../types/navigation';

export const navbarMenu: NavItem[] = [
    {
        id: 'funciona',
        to: '#funciona',
        label: '¿Cómo funciona?',
        title: 'Conoce como funciona',
        dataLink: 'navbar-funciona-link',
        type: 'anchor',
    },
    {
        id: 'tipos',
        to: '#tipos',
        label: 'Tipos de Casas',
        title: 'Descubre los tipos de casas',
        dataLink: 'navbar-tipos-link',
        type: 'anchor',
    },
    {
        id: 'testimonios',
        to: '#testimonios',
        label: 'Testimonios',
        title: 'Revisa los testimonios de Compramos Casas',
        dataLink: 'navbar-testimonios-link',
        type: 'anchor',
    },
    {
        id: 'preguntas',
        to: '#preguntas',
        label: 'Preguntas',
        title: 'Revisa las preguntas frecuentes',
        dataLink: 'navbar-preguntas-link',
        type: 'anchor',
    },
    {
        id: 'oficinas',
        to: '#oficinas',
        label: 'Oficinas',
        title: 'Revisa la ubicación de nuestras oficinas',
        dataLink: 'navbar-oficinas-link',
        type: 'anchor',
    },
];
