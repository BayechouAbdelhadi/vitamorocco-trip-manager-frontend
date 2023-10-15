import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface LogoProps {
    shrinkable?: boolean;
}

function Logo({ shrinkable = false }: LogoProps) {
    return (
        <Link className="logo" to="/">
            <Box
                component="img"
                src="/logo-vita-morocco.svg"
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
                src="/mini-logo-vita-morocco.svg"
                alt="logo"
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
