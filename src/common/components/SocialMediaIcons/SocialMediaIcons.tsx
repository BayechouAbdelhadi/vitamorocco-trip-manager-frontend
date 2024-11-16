import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, SvgIcon, useMediaQuery } from '@mui/material';
import useScrollDetection from '../../../hooks/front/useScrollDetection'
import './SocialMediaIcons.scss';

interface ISocialMediaIcons {
    displayColumn?: boolean;
    float?: boolean;
}

export default function SocialMediaIcons({ displayColumn = false, float = false }: ISocialMediaIcons) {
    const isVisible = useScrollDetection(300);
    const isXs = useMediaQuery('(max-width:600px)');

    if (!isVisible) return null

    return (
        <Box
            sx={{
                display: 'flex',
                border: '1px solid rgb(202, 202, 202)',
            }}
            className={`social-media-icons-container ${float && (isXs ? 'float-bottom' : 'column float-left')}`}
        >
            <a href='https://wa.me/message/RECE76NM33GCB1' target='__blank'>
                <WhatsAppIcon color="success" fontSize={isXs ? "medium" : "large"} className="icon whatsapp-icon" />
            </a>
            <a href='https://www.instagram.com/vitamorocco/' target='__blank'>
                <InstagramIcon color="error" fontSize={isXs ? "medium" : "large"} className="icon instagram-icon" />
            </a>
            <a href='https://www.facebook.com/vitamorocco/' target='__blank'>
                <FacebookIcon color="info" fontSize={isXs ? "medium" : "large"} className="icon facebook-icon" />
            </a>
            <a href='https://www.tiktok.com/@vita.morocco/' target='__blank'>
                <SvgIcon className="icon tiktok-icon" fontSize={isXs ? "medium" : "large"}>
                    <svg><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
                </SvgIcon>
            </a>
            <a href='https://www.tripadvisor.com/Attraction_Review-g293734-d26194088-Reviews-Vita_Morocco-Marrakech_Marrakech_Safi.html' target='__blank'>
                <SvgIcon className="icon trip-advisor-icon" fontSize={isXs ? "medium" : "large"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFE082" d="M24,29C6.9,29-3.1,23.7,3.2,18C8.7,13,16,10,24,10c7.2,0,13.8,2.4,19,6.5C50.3,22.2,41.1,29,24,29z" /><path fill="#FFF" d="M23,26c0,6.1-4.9,11-11,11S1,32.1,1,26s4.9-11,11-11S23,19.9,23,26z M36,15c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S42.1,15,36,15z" /><path fill="#F44336" d="M12 24A2 2 0 1 0 12 28A2 2 0 1 0 12 24Z" /><path fill="#00C853" d="M36 24A2 2 0 1 0 36 28A2 2 0 1 0 36 24Z" /><path fill="#37474F" d="M12,17c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,17,12,17 M12,14C5.4,14,0,19.4,0,26c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,19.4,18.6,14,12,14L12,14z" /><path fill="#37474F" d="M12 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S9.8 22 12 22M12 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S15.3 20 12 20L12 20zM36 17c5 0 9 4 9 9s-4 9-9 9-9-4-9-9S31 17 36 17M36 14c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C48 19.4 42.6 14 36 14L36 14z" /><path fill="#37474F" d="M36 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S33.8 22 36 22M36 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S39.3 20 36 20L36 20zM24 26L21 33 24 37zM24 26L27 33 24 37zM36 14h12c0 0-3.1 3.8-3 7C42.1 16 36 14 36 14zM12 14H0c0 0 3.1 3.8 3 7C5.9 16 12 14 12 14z" /><path fill="#37474F" d="M24,10c-6.3,0-12.2,1.9-17.1,5.2C8.4,14.4,10.2,14,12,14c0.4,0,0.8,0,1.3,0.1c3.4-1.4,7-2.1,10.7-2.1c3.7,0,7.4,0.7,10.7,2.1c0.4,0,0.8-0.1,1.3-0.1c1.8,0,3.6,0.4,5.1,1.2C36.2,11.9,30.3,10,24,10z" /></svg>
                </SvgIcon>
            </a>
        </Box>
    );
}
