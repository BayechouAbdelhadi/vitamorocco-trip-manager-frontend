import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
import { TermsAndConditions } from './TermsAndConditions/TermsAndConditions';
const Tips = lazyComponent(import('./Tips'), 'Tips');
const Faqs = lazyComponent(import('./Faqs/Faqs'), 'Faqs');
const Gallery = lazyComponent(import('./Gallery'), 'Gallery');
const Services = lazyComponent(import('./Services'), 'Services');
const PageNotFound = lazyComponent(import('../PageNotFound/PageNotFound'), 'PageNotFound');

const ServicesRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="terms_and_conditions" element={<TermsAndConditions />} />
                <Route path="tips" element={<Tips />} />
                <Route path="faqs" element={<Faqs />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ServicesRoutes };
