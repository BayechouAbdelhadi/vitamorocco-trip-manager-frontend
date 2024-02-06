import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import Logo from '../Logo';
import LanguagePicker from '../lang';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component
import NavbarItem from './NavBarItem';
import './Navbar.scss';
import { NAVBAR_ITEMS } from './constants';

const mobileMenuId = 'primary-search-account-menu-mobile';

const PrimarySearchAppBar: React.FC = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const toggleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(mobileMoreAnchorEl !== null ? null : event.currentTarget);
    };

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
                        {/* <LanguagePicker className='lang-picker' /> */}
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
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={() => setMobileMoreAnchorEl(null)} />
        </Box>
    );
};

export default PrimarySearchAppBar;
