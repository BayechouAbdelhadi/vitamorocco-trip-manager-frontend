import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Logo.css';
function Logo() {
    return (
        <Link className="logo" to="">
            <img src="https://i.imgur.com/QQ8FTjR.png" alt="" />
            <Typography variant="h6" noWrap component="div">
                Vita Morocco
            </Typography>
        </Link>
    );
}
export default Logo;
