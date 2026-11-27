import type { MouseEvent } from 'react';

import { useNavActions } from '../../hooks/useNavActions';

import { SmartLink } from '../../utils/SmartLink';

import type { NavItem } from '../../types/navigation';

interface NavItemsProps {
    item: NavItem;
    dataLink?: string;
    dataCta?: string;
    onAfterNavigate?: () => void;
}

export const NavItems = ({ item, onAfterNavigate }: NavItemsProps) => {
    const { handleNavigation, isAnchorActive } = useNavActions();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        handleNavigation(e, item);
        if (e.defaultPrevented) onAfterNavigate?.();
    };

    const commonProps = {
        title: item.title,
        onClick: handleClick,
    };

    if (item.type === 'anchor') {
        return (
            <a
                href={`/${item.to}`}
                className={isAnchorActive(item) ? 'active' : ''}
                aria-current={isAnchorActive(item) ? 'location' : undefined}
                data-link={item.dataLink}
                data-cta={item.dataCta}
                {...commonProps}
            >
                {item.label}
            </a>
        );
    }

    return (
        <SmartLink to={item.to} dataLink={item.dataLink} dataCta={item.dataCta} {...commonProps}>
            {item.label}
        </SmartLink>
    );
};
