import { PropsWithChildren } from 'react';
import { lazyComponent } from '../../utils/lazy';
import { ErrorBoundarySuspense } from '../ErrorBoundarySuspense/ErrorBoundarySuspense';
import SocialMediaIcons from '../SocialMediaIcons';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const ScrollToTopButton = lazyComponent(import('../Buttons/ScrollToTopButton'));
const CookiesNotice = lazyComponent(import('../CookiesNotice'));

import './MainLayout.scss';

export const MainLayout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
    <div className="main-container">

        <Header />

        <SocialMediaIcons float />

        <ErrorBoundarySuspense>{children}</ErrorBoundarySuspense>

        <Footer />

        <ErrorBoundarySuspense>
            <ScrollToTopButton />
        </ErrorBoundarySuspense>

        <ErrorBoundarySuspense>
            <CookiesNotice />
        </ErrorBoundarySuspense>
    </div>
);
