import { useLocation, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

import type { NavItem } from '../types/navigation';

export function scrollToAnchor(hash: string) {
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ block: 'start' });
    target?.focus({ preventScroll: true });
}

export const useNavActions = () => {
    const location = useLocation();
    const navigate = useNavigate();

    function goTo(to: string) {
        const home = location.pathname === '/';

        if (to === '/' && home && !location.hash) {
            requestAnimationFrame(() => window.scrollTo({ top: 0 }));
        } else if (to.startsWith('#') && home && location.hash === to) {
            requestAnimationFrame(() => scrollToAnchor(to));
        } else {
            navigate(to.startsWith('#') ? `/${to}` : to, {
                replace: home && (to === '/' || to.startsWith('#')),
            });
        }
    }

    function handleNavigation(event: MouseEvent<HTMLAnchorElement>, item: NavItem) {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        event.preventDefault();
        goTo(item.to);
    }

    const isAnchorActive = (item: NavItem) =>
        item.type === 'anchor' && location.pathname === '/' && location.hash === item.to;

    return { goTo, handleNavigation, isAnchorActive };
};
