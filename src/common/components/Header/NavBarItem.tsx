import { Button } from '@mui/material';
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
    return (
        <Button size="large" color="inherit" component={Link} to={navBarItem.href ?? '#'}>
            {navBarItem.text}
        </Button>
    );
};

export default NavbarItem;
