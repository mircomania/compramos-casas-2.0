import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { scrollToAnchor } from '../hooks/useNavActions';

export function ScrollToTop() {
    const location = useLocation();
    const previousPath = useRef<string>();

    useEffect(() => {
        const { pathname, hash } = location;
        const samePath = previousPath.current === pathname;
        previousPath.current = pathname;

        const frame = requestAnimationFrame(() => {
            if (pathname === '/' && hash) {
                scrollToAnchor(hash);
            } else {
                window.scrollTo({ top: 0, behavior: samePath ? 'auto' : 'instant' });
            }
        });

        return () => cancelAnimationFrame(frame);
    }, [location]);

    return null;
}
