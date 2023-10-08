import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './SocialMediaIcons.scss';
import { Box } from '@mui/material';

interface ISocialMediaIcons {
    displayColumn?: boolean;
    float?: boolean;
}

export default function SocialMediaIcons({ displayColumn = false, float = false }: ISocialMediaIcons) {
    return (
        <Box
        sx= {{
            display: { md: 'flex', xs: float ? 'none' : 'flex'},
        }}
         className={`social-media-icons-container ${displayColumn && 'column'} ${float && 'float-container'}`}>
            <InstagramIcon color="info" fontSize="large" className="icon instagram-icon" />
            <YouTubeIcon color="error" fontSize="large" className="icon youtube-icon" />
            <FacebookIcon color="info" fontSize="large" className="icon facebook-icon" />
        </Box>
    );
}
