import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { NavItem } from './constants';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';


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
    return (
        <Button size="large" color="inherit" component={Link} to={navBarItem.href ?? '#'}>
            {parse(t(`${navBarItem.text}`))}
        </Button>
    );
};

export default NavbarItem;
