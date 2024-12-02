import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils';

import './Logo.scss';

interface LogoProps {
    shrinkable?: boolean;
}

function Logo({ shrinkable = false }: LogoProps) {
    return (
        <Link
            to="/"
            className="logo"
            onClick={scrollToTop}>
            <Box
                component="img"
                src="/img/logo-vita-morocco.svg"
                loading="lazy"
                alt="logo"
                sx={{
                    display: shrinkable
                        ? {
                            xs: 'none',
                            md: 'block',
                        }
                        : 'block',
                    width: 200,
                }}
            />

            <Box
                component="img"
                src="/img/mini-logo-vita-morocco.svg"
                alt="logo"
                loading="lazy"
                sx={{
                    display: shrinkable
                        ? {
                            xs: 'block',
                            md: 'none',
                        }
                        : 'none',
                    width: 80,
                }}
            />
        </Link>
    );
}
export default Logo;
