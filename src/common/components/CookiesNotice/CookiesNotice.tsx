import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils';
import { useTranslation } from 'react-i18next';

import './CookiesNotice.scss';

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
            <Link to="/services/faqs" onClick={scrollToTop}>{t('faqs')}</Link>
            <Link to="/services/terms_and_conditions" onClick={scrollToTop}>{t('learn_more')}</Link>
            <Button onClick={handleAccept}>{t('accept_all')}</Button>
            <Button onClick={handleDeny}>{t('refuse_all')}</Button>
        </div>
    );
};

export default CookiesNotice;
