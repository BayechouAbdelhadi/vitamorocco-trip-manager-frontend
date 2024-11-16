import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import parse from 'html-react-parser';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavItem } from './constants';

interface DropDownProps {
    navBarItem: NavItem;
    type?: string;
}

function DropDown({ navBarItem, type }: DropDownProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    return (
        <div
            id={`${navBarItem.id}-button`}
            className="dropdown-button" // Apply class name
            onMouseEnter={handleMouseEnter}
            onMouseLeave={closeMenu}
        >
            {navBarItem.text && (
                <Button
                    aria-controls={`${navBarItem.id}-${type}`}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                    color="inherit"
                    sx={{ width: '100%', height: '100%' }}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    {parse(
                        typeof navBarItem.text === 'string'
                            ? t(navBarItem.text)
                            : t(navBarItem.text.key, navBarItem.text.args)
                    )}
                </Button>
            )}
            {isMenuOpen && (
                <div
                    className="dropdown-menu" // Apply class name
                    id={`${navBarItem.id}-${type}`}
                >
                    {navBarItem.dropdown?.map((menuItem) => (
                        <Fragment key={menuItem.id}>
                            {menuItem.text && (
                                <Link
                                    to={menuItem.href ?? '#'}
                                    key={`${menuItem.id}-${type}`}
                                    onClick={closeMenu}
                                    className="dropdown-item" // Apply class name
                                >
                                    {parse(
                                        typeof menuItem.text === 'string'
                                            ? t(menuItem.text)
                                            : t(menuItem.text.key, menuItem.text.args)
                                    )}
                                </Link>
                            )}
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
