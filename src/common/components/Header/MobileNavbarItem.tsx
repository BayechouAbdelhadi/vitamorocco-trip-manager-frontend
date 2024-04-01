import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, ListItem, ListItemButton, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavItem } from './constants';

interface NavBarItemProps {
    navBarItem: NavItem;
    onSelect: () => void;
}
const MobileNavbarItem = ({ navBarItem, onSelect }: NavBarItemProps) => {
    const hasDropdown = (navBarItem.dropdown ?? []).length > 0;
    const [expanded, setExpanded] = useState<boolean>(false);

    const { t } = useTranslation();

    const toggleExp = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ListItem className="mobile-nav-bar-item" disablePadding>
                {hasDropdown ? (
                    <>
                        <ListItemButton
                            className="mobile-nav-bar-button"
                            component={Link}
                            to={navBarItem.href ?? '#'}
                            onClick={onSelect}
                        >
                            {navBarItem.icon}
                            <Typography className="mobile-nav-bar-button-text">
                                {parse(t(`${navBarItem.text}`))}
                            </Typography>
                        </ListItemButton>
                        <IconButton onClick={toggleExp}>
                            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </>
                ) : (
                    <ListItemButton
                        className="mobile-nav-bar-button"
                        component={Link}
                        to={navBarItem.href ?? '#'}
                        onClick={onSelect}
                    >
                        {navBarItem.icon}
                        <Typography className="mobile-nav-bar-button-text">{parse(t(`${navBarItem.text}`))}</Typography>
                    </ListItemButton>
                )}
            </ListItem>
            <div className={`nav-item-details ${expanded ? 'active' : ''}`}>
                {navBarItem.dropdown?.map((dropDownItem) => (
                    <ListItemButton
                        className="mobile-nav-bar-button"
                        key={dropDownItem.id}
                        component={Link}
                        to={dropDownItem.href ?? '#'}
                        onClick={onSelect}
                    >
                        {dropDownItem.icon}
                        {dropDownItem.text && (
                            <Typography className="mobile-nav-bar-button-text">
                                {typeof dropDownItem.text === 'string'
                                    ? t(dropDownItem.text)
                                    : t(dropDownItem.text.key, dropDownItem.text.args)}
                            </Typography>
                        )}
                    </ListItemButton>
                ))}
            </div>
        </>
    );
};
export default MobileNavbarItem;
