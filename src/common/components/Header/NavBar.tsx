import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Logo from '../logo/Logo';
import NavbarItem from './NavBarItem';
import './Navbar.scss';
export interface NavItem {
    id: string;
    href: string;
    text: string;
    dropdown: NavItem[];
    anchorEl: HTMLElement | null;
}

export default function PrimarySearchAppBar() {
    const [navBarItems, setNavBarItems] = useState<NavItem[]>(links);
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
    const renderMobileMenu = <></>;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <div color="transparent" className="navbar">
                <Toolbar
                    className="tool-bar"
                    sx={{ justifyContent: { xs: 'space-between', md: 'center' }, maxWidth: { md: '80%', xs: '100%' } }}
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

const links: NavItem[] = [
    {
        text: 'Services',
        href: '/services',
        dropdown: [
            {
                text: 'Gallery',
                href: '/servies/gallery',
                dropdown: [],
                id: 'servies-gallery',
                anchorEl: null,
            },
            {
                text: 'FAQs',
                href: '/servies/faqs',
                dropdown: [],
                id: 'servies-faqs',
                anchorEl: null,
            },
            {
                text: 'Tips',
                href: '/servies/tips',
                dropdown: [],
                id: '/servies-tips',
                anchorEl: null,
            },
        ],
        id: 'services',
        anchorEl: null,
    },
    {
        text: 'Excursions',
        href: '/excursions',
        dropdown: [
            //FromDB
        ],
        id: 'excursions',
        anchorEl: null,
    },
    {
        text: 'Tours',
        href: '/tours',
        dropdown: [
            //FromDB
        ],
        id: 'tours',
        anchorEl: null,
    },
    {
        text: 'Activities',
        href: '/activities',
        dropdown: [
            //FromDB
        ],
        id: 'activities',
        anchorEl: null,
    },
    {
        text: 'About',
        href: '/about',
        dropdown: [],
        id: 'about',
        anchorEl: null,
    },
    {
        text: 'Contacts',
        href: '/contacts',
        dropdown: [
            //FromDB
        ],
        id: 'contacts',
        anchorEl: null,
    },
];
