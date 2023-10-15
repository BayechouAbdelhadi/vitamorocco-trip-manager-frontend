import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Logo from '../Logo';
import LanguagePicker from '../lang';
import MobileNavbarItem from './MobileNavbarItem';
import NavbarItem from './NavBarItem';
import './Navbar.scss';
import { NAVBAR_ITEMS } from './constants';

const drawerWidth = 300;

export default function PrimarySearchAppBar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const toggleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(mobileMoreAnchorEl !== null ? null : event.currentTarget);
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
            anchor="left"
            open={isMobileMenuOpen}
            className="mobile-menu-drawer"
        >
            <div className="drawer-header">
                <IconButton onClick={toggleMobileMenu}>
                    {<CloseIcon width="30" className="close-drawing-icon" color="primary" />}
                </IconButton>
            </div>
            <List>
                {NAVBAR_ITEMS.map((navBarItem) => (
                    <MobileNavbarItem
                        navBarItem={navBarItem}
                        key={navBarItem.id}
                        onSelect={() => setMobileMoreAnchorEl(null)}
                    />
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
                    <Logo shrinkable />
                    <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}>
                        {NAVBAR_ITEMS.map((navBarItem) => (
                            <NavbarItem key={navBarItem.id} navBarItem={navBarItem} type={'laptop'} />
                        ))}
                        <LanguagePicker />
                    </Box>
                    <Box
                        sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
                        className="mobile-menu-button-container"
                    >
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={toggleMobileMenu}
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
