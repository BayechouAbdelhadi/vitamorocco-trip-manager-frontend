import { PropsWithChildren } from 'react';
import { ErrorBoundarySuspense } from '../ErrorBoundarySuspense/ErrorBoundarySuspense';
import SocialMediaIcons from '../SocialMediaIcons';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import ScrollToTopButton from '../Buttons/ScrollToTopButton';
import { lazyComponent } from '../../utils/lazy';
const CookiesNotice = lazyComponent(import('../CookiesNotice'));

import './MainLayout.scss';

const isCookieAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted=true'));

export const MainLayout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {

    return (
        <div className="main-container">

            <Header />

            <SocialMediaIcons float />

            <ErrorBoundarySuspense>
                {children}
                {!isCookieAccepted && <CookiesNotice />}
            </ErrorBoundarySuspense>

            <Footer />

            <ScrollToTopButton />
        </div>
    )
};
