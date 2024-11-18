import { ButtonProps, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';

type shareData = {
    title: string;
    text: string;
    url: string;
};
interface SharedButtonProps extends ButtonProps {
    shareData: shareData;
}

const ShareButton = ({ shareData, ...buttonProps }: SharedButtonProps) => {
    const [isSharingSupported, setIsSharingSupported] = useState<boolean>(true);

    useEffect(() => {
        setIsSharingSupported(Boolean(navigator.share));
    }, []);

    const handleShareClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // to prevent triggering parent click handlers
        e.stopPropagation()
        try {
            await navigator.share(shareData);
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    if (!isSharingSupported) {
        return null;
    }
    return (
        <IconButton aria-label="share" onClick={handleShareClick} {...buttonProps}>
            <ShareIcon />
        </IconButton>
    );
};

export default ShareButton;
