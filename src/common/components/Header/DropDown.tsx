import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the arrow icon
import Button from '@mui/material/Button'; // Import Material-UI's Button
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './constants';

interface DropDownProps {
    navBarItem: NavItem;
    type?: string;
}

function DropDown({ navBarItem, type }: DropDownProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Button
                aria-controls={`${navBarItem.id}-${type}`}
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
                sx={{ width: '100%', height: '100%' }}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {navBarItem.text}
            </Button>
            {isMenuOpen && (
                <div
                    className="dropdown-menu" // Apply class name
                    id={`${navBarItem.id}-${type}`}
                >
                    {navBarItem.dropdown?.map((menuItem) => (
                        <Link
                            to={menuItem.href ?? '#'}
                            key={`${menuItem.id}-${type}`}
                            onClick={closeMenu}
                            className="dropdown-item" // Apply class name
                        >
                            {menuItem.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
