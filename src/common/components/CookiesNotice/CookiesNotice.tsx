import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils';
import './CookiesNotice.scss';
import { useTranslation } from 'react-i18next';

const CookiesNotice: React.FC = () => {
    const [isCookieAccepted, setCookieState] = useState(false);

    const { t } = useTranslation();

    const handleAccept = () => {
        document.cookie = 'cookieAccepted=true';

        // Update the state to hide the notice
        setCookieState(true);
    };

    const handleDeny = () => {
        document.cookie = 'cookieAccepted=false'

        // Update the state to hide the notice
        setCookieState(true);
    };

    useEffect(() => {
        // Check if the "cookieAccepted" cookie is set
        const isCookieAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted=true'));
        // // if (isCookieAccepted) {
        setCookieState(isCookieAccepted);
        // }
    }, []);

    if (isCookieAccepted) {
        return null; // The notice is hidden
    }

    return (
        <div className="cookies-notice">
            <div>
                <strong>{t('cookies_policy.title')}</strong>
                <hr style={{ width: "100%" }} />
            </div>
            <p>{t('cookies_policy.text')}</p>
            <Link to="/faqs" onClick={scrollToTop}>{t('faqs')}</Link>
            <Link to="/terms_and_conditions" onClick={scrollToTop}>{t('learn_more')}</Link>
            <Button onClick={handleAccept}>{t('accept_all')}</Button>
            <Button onClick={handleDeny}>{t('refuse_all')}</Button>
        </div>
    );
};

export default CookiesNotice;
