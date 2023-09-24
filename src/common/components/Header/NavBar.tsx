// import { Menu as MenuIcon } from '@mui/icons-material';
// import { Button, Hidden, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
// import React, { useState } from 'react';
// import { LayoutContainer } from '../LayoutContainer/LayoutContainer';
// import Logo from '../logo/Logo';
// import NavBarLink, { NavLink } from './NavBarLink';

// const links: NavLink[] = [
//     {
//         text: 'Item1',
//         href: '/home/ok/pop',
//         dropdown: [
//             { text: 'hjhjhj', href: '/home/ok/pop', dropdown: [] },
//             { text: 'hjhjhj', href: '/home/ok/pop', dropdown: [] },
//             { text: 'hjhjhj', href: '/home/ok/pop', dropdown: [] },
//         ],
//     },
//     {
//         text: 'Item2',
//         href: '/home/ok/pop',
//         dropdown: [],
//     },
//     {
//         text: 'Item3',
//         href: '/home/ok/pop',
//         dropdown: [],
//     },
// ];

// const styles = {
//     navbar: {
//         backgroundColor: '#f8f4f4',
//         color: '#fff',
//     },
//     linksContainer: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     mobBtn: {
//         color: '#fff',
//         cursor: 'pointer',
//     },
// };

// function Navbar() {
//     const linksrow = links.map((link) => <NavBarLink key={link.text} link={link} />);

//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//     const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <LayoutContainer role="nav" Tag="nav">
//             <Toolbar style={styles.navbar}>
//                 <Logo />
//                 <Hidden smDown>
//                     <div style={styles.linksContainer}>{linksrow}</div>
//                 </Hidden>
//                 <Hidden mdUp>
//                     <IconButton color="inherit" aria-label="menu" style={styles.mobBtn} onClick={handleMenuClick}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                         {linksrow}
//                         <MenuItem>
//                             <Button>Okk</Button>
//                         </MenuItem>
//                     </Menu>
//                 </Hidden>
//             </Toolbar>
//         </LayoutContainer>
//     );
// }

// export default Navbar;

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from './NavBarLink';

const links: NavLink[] = [
    {
        text: 'Item1',
        href: '/home/ok/pop',
        dropdown: [
            {
                text: 'd1',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd1-control',
                anchorEl: null,
            },
            {
                text: 'd2',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd2-control',
                anchorEl: null,
            },
            {
                text: 'd3',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd3-control',
                anchorEl: null,
            },
        ],
        id: 'Item1-control',
        anchorEl: null,
    },
    {
        text: 'Item2',
        href: '/home/ok/pop',
        dropdown: [],
        id: 'Item2-control',
        anchorEl: null,
    },
    {
        text: 'Item3',
        href: '/home/ok/pop',
        dropdown: [
            {
                text: 'd11',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd11-control',
                anchorEl: null,
            },
            {
                text: 'd12',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd12-control',
                anchorEl: null,
            },
            {
                text: 'd13',
                href: '/home/ok/pop',
                dropdown: [],
                id: 'd13-control',
                anchorEl: null,
            },
        ],
        id: 'Item3-control',
        anchorEl: null,
    },
];

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Vita Morocco
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
