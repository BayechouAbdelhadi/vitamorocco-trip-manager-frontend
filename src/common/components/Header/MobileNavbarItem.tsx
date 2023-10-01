import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, ListItem, ListItemButton, Typography } from '@mui/material';
import { useState } from 'react';
import { NavItem } from './constants';

interface NavBarItemProps {
    navBarItem: NavItem;
}
const MobileNavbarItem = ({ navBarItem }: NavBarItemProps) => {
    const hasDropdown = navBarItem.dropdown.length > 0;
    const [expanded, setExpanded] = useState<boolean>(false);
    const toggleExp = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ListItem className="mobile-nav-bar-item" disablePadding>
                {hasDropdown ? (
                    <>
                        <ListItemButton className="mobile-nav-bar-button">
                            {navBarItem.icon}
                            <Typography className="mobile-nav-bar-button-text">{navBarItem.text}</Typography>
                        </ListItemButton>
                        <IconButton onClick={toggleExp}>
                            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </>
                ) : (
                    <ListItemButton className="mobile-nav-bar-button">
                        {navBarItem.icon}
                        <Typography className="mobile-nav-bar-button-text">{navBarItem.text}</Typography>
                    </ListItemButton>
                )}
            </ListItem>
            {expanded && (
                <div className="nav-item-details">
                    {navBarItem.dropdown.map((dropDownItem) => (
                        <ListItemButton className="mobile-nav-bar-button" key={dropDownItem.id}>
                            {dropDownItem.icon}
                            <Typography className="mobile-nav-bar-button-text">{dropDownItem.text}</Typography>
                        </ListItemButton>
                    ))}
                </div>
            )}
        </>
    );
};
export default MobileNavbarItem;
