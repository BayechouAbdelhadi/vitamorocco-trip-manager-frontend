import React, { useState, useEffect } from 'react';
import './CookiesNotice.scss'
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils';
import { Button } from '@mui/material';

const CookiesNotice: React.FC = () => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(false);

    const handleAccept = () => {
        document.cookie = 'cookieAccepted=true'

        // Update the state to hide the notice
        setIsCookieAccepted(true);
    };

    useEffect(() => {
        // Check if the "cookieAccepted" cookie is set
        const isCookieAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted'));
        if (isCookieAccepted) {
            setIsCookieAccepted(true);
        }

    }, []);

    if (isCookieAccepted) {
        return null; // The notice is hidden
    }

    return (
        <div className="cookies-notice">
            <div>
                <strong>Cookie Policy</strong>
                <hr style={{ width: "100%" }} />
            </div>
            <p>
                We use cookies to personalise content, to provide social media features and to analyse our traffic.
                This website uses cookies to ensure you get the best experience on our website.
            </p>
            <Link to="/faqs" onClick={scrollToTop}>FAQs</Link>
            <Link to="/cookie-policy" onClick={scrollToTop}>Learn more</Link>
            <Button onClick={handleAccept}>Accept Cookies</Button>
        </div>
    );
};

export default CookiesNotice;
