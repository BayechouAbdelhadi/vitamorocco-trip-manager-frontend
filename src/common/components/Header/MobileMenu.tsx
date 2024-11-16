import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import React from 'react';
import useNavBar from '../../../hooks/front/useNavBar';
import Logo from '../Logo';
import MobileNavbarItem from './MobileNavbarItem';
import LanguagePicker from '../lang';

const drawerWidth = 300;

interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const navbarItems = useNavBar();

    return (
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
                <Logo shrinkable />
                <IconButton onClick={toggleMobileMenu}>
                    <CloseIcon width="30" className="close-drawing-icon" color="primary" />
                </IconButton>
            </div>
            <List>
                {navbarItems.map((navBarItem) => (
                    <MobileNavbarItem navBarItem={navBarItem} key={navBarItem.id} onSelect={toggleMobileMenu} />
                ))}
                <LanguagePicker className="mobile-lang-picker" />
            </List>
        </Drawer>
    );
};

export default MobileMenu;
