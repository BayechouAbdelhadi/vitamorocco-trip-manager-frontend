import { Button } from '@mui/material';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { NavItem } from './constants';

interface NavBarItemProps {
    navBarItem: NavItem;
    // anchorOrigin?: PopoverOrigin;
    // transformOrigin?: PopoverOrigin;
    type?: string;
}

const NavbarItem = ({ navBarItem, type }: NavBarItemProps) => {
    const hasDropdown = (navBarItem.dropdown ?? []).length > 0;

    return hasDropdown ? (
        <DropDown navBarItem={navBarItem} type={type} />
    ) : (
        <SimpleNavbarItem navBarItem={navBarItem} />
    );
};

const SimpleNavbarItem = ({ navBarItem }: NavBarItemProps) => {
    const { t } = useTranslation();
    if (!navBarItem.text) return null;
    return (
        <Button size="large" color="inherit" component={Link} to={navBarItem.href ?? '#'}>
            {parse(
                typeof navBarItem.text === 'string' ? t(navBarItem.text) : t(navBarItem.text.key, navBarItem.text.args)
            )}
        </Button>
    );
};

export default NavbarItem;
