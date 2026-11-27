import type { KeyboardEvent, MouseEvent } from 'react';

interface BurgerIconProps {
    size?: number;
    stroke?: number;
    className?: string;
    ariaLabel?: string;
    dataLink?: string;
    decorative?: boolean;
    onClick?: (event?: MouseEvent<SVGSVGElement> | KeyboardEvent<SVGSVGElement>) => void;
}

export const BurgerIcon = ({ size = 44, stroke = 1.2, onClick, className = '', ariaLabel = 'Burger menu', dataLink, decorative = false }: BurgerIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            role={decorative ? undefined : 'button'}
            aria-hidden={decorative || undefined}
            aria-label={decorative ? undefined : ariaLabel}
            tabIndex={decorative ? undefined : 0}
            {...(dataLink ? { 'data-link': dataLink } : {})}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick?.(e);
                }
            }}
        >
            <line x1="3" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />

            <line x1="3" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />

            <line x1="3" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
    );
};
