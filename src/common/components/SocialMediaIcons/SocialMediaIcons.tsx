import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/material';
import useScrollDetection from '../../../hooks/front/useScrollDetection'
import './SocialMediaIcons.scss';

interface ISocialMediaIcons {
    displayColumn?: boolean;
    float?: boolean;
}

export default function SocialMediaIcons({ displayColumn = false, float = false }: ISocialMediaIcons) {
    const isVisible = useScrollDetection(300);

    if (!isVisible) return null

    return (
        <Box
            sx={{
                display: { md: 'flex', xs: float ? 'none' : 'flex' },
            }}
            className={`social-media-icons-container ${displayColumn && 'column'} ${float && 'float-container'}`}>
            <InstagramIcon color="info" fontSize="large" className="icon instagram-icon" />
            <YouTubeIcon color="error" fontSize="large" className="icon youtube-icon" />
            <FacebookIcon color="info" fontSize="large" className="icon facebook-icon" />
        </Box>
    );
}
