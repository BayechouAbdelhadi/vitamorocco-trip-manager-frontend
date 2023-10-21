import { PropsWithChildren } from 'react';
import { lazyComponent } from '../../utils';
import { ErrorBoundarySuspense } from '../ErrorBoundarySuspense/ErrorBoundarySuspense';
import SocialMediaIcons from '../SocialMediaIcons';
import './MainLayout.scss';
import ScrollToTopButton from '../Buttons/ScrollToTopButton';

const Footer = lazyComponent('Footer', import('../Footer/Footer'));
const Header = lazyComponent('Header', import('../Header/Header'));

export const MainLayout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <div className='main-container'>
    <ErrorBoundarySuspense>
      <Header />
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <SocialMediaIcons displayColumn float />
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>{children}</ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <Footer />
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <ScrollToTopButton />
    </ErrorBoundarySuspense>
  </div>
);
