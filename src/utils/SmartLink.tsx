import { NavLink, useLocation } from 'react-router-dom';

interface SmartLinkProps {
    to: string;
    children: React.ReactNode;
    ariaLabel?: string;
    className?: string;
    title?: string;
    dataCta?: string;
    dataLink?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const SmartLink = ({ to, ariaLabel, className, title, children, dataCta, dataLink, onClick }: SmartLinkProps) => {
    const location = useLocation();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);

        if (e.defaultPrevented) return;

        if (location.pathname === to && !location.hash && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
            });
        }
    };

    return (
        <NavLink
            to={to}
            onClick={handleClick}
            aria-label={ariaLabel}
            className={className}
            title={title}
            {...(dataCta ? { 'data-cta': dataCta } : {})}
            {...(dataLink ? { 'data-link': dataLink } : {})}
        >
            {children}
        </NavLink>
    );
};
