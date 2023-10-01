import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Logo from '../logo/Logo';
import MobileNavbarItem from './MobileNavbarItem';
import NavbarItem from './NavBarItem';
import './Navbar.scss';
import { NAVBAR_ITEMS, NavItem } from './constants';

const drawerWidth = 300;

export default function PrimarySearchAppBar() {
    const [navBarItems, setNavBarItems] = useState<NavItem[]>(NAVBAR_ITEMS);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const toggleMenu = (index: number, el: HTMLElement | null) => {
        console.log('toggle', index, el);
        setNavBarItems((NavBarItems) =>
            NavBarItems.map((menuItem, i) => (i === index ? { ...menuItem, anchorEl: el } : menuItem))
        );
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="right"
            open={isMobileMenuOpen}
        >
            <div className="drawer-header">
                <IconButton onClick={handleMobileMenuClose}>{<CloseIcon width="30" />}</IconButton>
            </div>
            <Divider />
            <List>
                {navBarItems.map((navBarItem) => (
                    <MobileNavbarItem navBarItem={navBarItem} key={navBarItem.id} />
                ))}
            </List>
        </Drawer>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <div color="transparent" className="navbar">
                <Toolbar
                    className="tool-bar"
                    sx={{
                        justifyContent: { xs: 'space-between', md: 'center' },
                        maxWidth: { md: '80%', lg: '60%', xs: '100%' },
                    }}
                >
                    <Logo />
                    <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}>
                        {navBarItems.map((navBarItem, i) => (
                            <NavbarItem
                                key={navBarItem.id}
                                toggleMenu={toggleMenu}
                                index={i}
                                navBarItem={navBarItem}
                                type={'laptop'}
                            />
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </div>
            {renderMobileMenu}
        </Box>
    );
}
