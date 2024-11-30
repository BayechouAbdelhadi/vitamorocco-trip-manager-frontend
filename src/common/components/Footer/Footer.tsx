import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { app } from '../../constants/appConstants';
import { scrollToTop } from '../../utils';
import FooterColumns from './FooterColumns';

import './Footer.scss';

export const Footer = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <footer className="footer-container">
            <FooterColumns />
            <div className="bottom-content">
                <img src='/img/payment_methods.webp' loading="lazy" width={240} height={45} alt='accepted payment methods' />
                <small className="rights-reserved">
                    {t('all_rights_reserved')} &#xA9; 2019-{new Date().getFullYear()}{' '}
                    <Link to="/" onClick={scrollToTop}>
                        <strong>{app.name}</strong>
                    </Link>
                </small>
                {/* Made by {app.developers.map(developer => <a key={developer.initials} target="__blank" href={developer.linkedInLink}><strong>{developer.initials}</strong></a>)} */}
                {/* <SocialMediaIcons /> */}
            </div>
        </footer>
    );
};
