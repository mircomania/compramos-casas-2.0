import { useNavActions } from '../../hooks/useNavActions';

interface BotonNavProps {
    to: string;
    children: React.ReactNode;
    ariaLabel?: string;
    className?: string;
    title?: string;
    dataCta?: string;
    dataLink?: string;
    onAfterNavigate?: () => void;
}

export const BotonNav = ({ to, ariaLabel, className, title, children, dataCta, dataLink, onAfterNavigate }: BotonNavProps) => {
    const { goTo } = useNavActions();

    function handleClick() {
        goTo(to);
        onAfterNavigate?.();
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
            title={title}
            aria-label={ariaLabel}
            data-cta={dataCta}
            data-link={dataLink}
        >
            {children}
        </button>
    );
};
