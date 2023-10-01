import { PropsWithChildren } from 'react';
import { lazyComponent } from '../../utils';
import { ErrorBoundarySuspense } from '../ErrorBoundarySuspense/ErrorBoundarySuspense';
import SocialMediaIcons from '../SocialMediaIcons';

const Footer = lazyComponent('Footer', import('../Footer/Footer'));
const Header = lazyComponent('Header', import('../Header/Header'));

export const MainLayout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <>
    <ErrorBoundarySuspense>
      <Header />
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <SocialMediaIcons displayColumn={true}/>
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>{children}</ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <Footer />
    </ErrorBoundarySuspense>
  </>
);
