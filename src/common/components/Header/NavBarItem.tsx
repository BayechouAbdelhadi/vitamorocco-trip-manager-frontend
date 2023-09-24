import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Menu, MenuItem, PopoverOrigin } from '@mui/material';
import { NavItem } from './NavBar';

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
    return (
        <>
            <Button
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                size="large"
                aria-label="show more"
                aria-owns={hasDropdown ? `${navBarItem.id}-${type}` : undefined}
                aria-haspopup="true"
                onMouseOver={(e) => toggleMenu(index, e.currentTarget)}
                onClick={(e) => toggleMenu(index, e.currentTarget)}
                color="inherit"
                endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : undefined}
            >
                {navBarItem.text}
            </Button>
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
                    MenuListProps={{ onMouseLeave: () => toggleMenu(index, null) }}
                    sx={{ width: '240px' }}
                >
                    {navBarItem.dropdown.map((menuItem) => (
                        <MenuItem key={`${menuItem.id}-${type}`} sx={{ width: '240px' }}>
                            {menuItem.text}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </>
    );
};
export default NavbarItem;
