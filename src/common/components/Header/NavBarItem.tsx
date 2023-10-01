import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Menu, MenuItem, PopoverOrigin } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavItem } from './constants';
interface NavBarItemProps {
    toggleMenu: (index: number, el: HTMLElement | null) => void;
    navBarItem: NavItem;
    index: number;
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
    type: string;
}

const NavbarItem = ({ navBarItem, index, type, toggleMenu }: NavBarItemProps) => {
    const hasDropdown = navBarItem.dropdown.length > 0;
    // useClickAnyWhere((e: any) => {
    //     console.log('dfdfshufydsui');
    // });

    return (
        <div>
            <Link to={navBarItem.href}>
                <Button
                    size="large"
                    aria-label="show more"
                    aria-owns={hasDropdown ? `${navBarItem.id}-${type}` : undefined}
                    aria-haspopup="true"
                    onMouseOver={(e) => toggleMenu(index, e.currentTarget)}
                    onClick={hasDropdown ? (e) => toggleMenu(index, e.currentTarget) : undefined}
                    color="inherit"
                    endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : undefined}
                >
                    {navBarItem.text}
                </Button>
            </Link>
            {hasDropdown && (
                <Menu
                    anchorEl={navBarItem.anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    id={`${navBarItem.id}-${type}`}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(navBarItem.anchorEl)}
                    onClose={() => toggleMenu(index, null)}
                    sx={{ width: '240px' }}
                >
                    {navBarItem.dropdown.map((menuItem) => (
                        <Link to={menuItem.href} key={`${menuItem.id}-${type}`}>
                            <MenuItem sx={{ width: '240px' }}>{menuItem.text}</MenuItem>
                        </Link>
                    ))}
                </Menu>
            )}
        </div>
    );
};
export default NavbarItem;
