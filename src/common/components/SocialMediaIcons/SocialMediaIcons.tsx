import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, SvgIcon } from '@mui/material';
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
            <a href='https://www.whatsapp.com/vitamorocco/' target='__blank'>
                <WhatsAppIcon color="success" fontSize="large" className="icon whatsapp-icon" />
            </a>
            <a href='https://www.instagram.com/vitamorocco/' target='__blank'>
                <InstagramIcon color="error" fontSize="large" className="icon instagram-icon" />
            </a>
            <a href='https://www.facebook.com/vitamorocco/' target='__blank'>
                <FacebookIcon color="info" fontSize="large" className="icon facebook-icon" />
            </a>
            <a href='https://www.tiktok.com/@vita.morocco/' target='__blank'>
                <SvgIcon className="icon tiktok-icon">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
                </SvgIcon>
            </a>
        </Box>
    );
}
