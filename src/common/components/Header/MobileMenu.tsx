import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MobileNavbarItem from './MobileNavbarItem';
import LanguagePicker from '../lang';
import { NAVBAR_ITEMS } from './constants';

const drawerWidth = 300;

interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
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
                <IconButton onClick={toggleMobileMenu}>
                    <CloseIcon width="30" className="close-drawing-icon" color="primary" />
                </IconButton>
            </div>
            <List>
                {NAVBAR_ITEMS.map((navBarItem) => (
                    <MobileNavbarItem navBarItem={navBarItem} key={navBarItem.id} onSelect={toggleMobileMenu} />
                ))}
                <LanguagePicker className="mobile-lang-picker" />
            </List>
        </Drawer>
    );
};

export default MobileMenu;
