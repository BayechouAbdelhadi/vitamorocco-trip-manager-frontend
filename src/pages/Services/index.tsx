import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
import { TermsAndConditions } from './TermsAndConditions/TermsAndConditions';
const Tips = lazyComponent('Tips', import('./Tips'));
const Faqs = lazyComponent('Faqs', import('./Faqs/Faqs'));
const Gallery = lazyComponent('Gallery', import('./Gallery'));
const Services = lazyComponent('Services', import('./Services'));
const PageNotFound = lazyComponent('PageNotFound', import('../PageNotFound/PageNotFound'));

const ServicesRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="terms_and_conditions" element={<TermsAndConditions />} />
                <Route path="tips" element={<Tips />} />
                <Route path="Faqs" element={<Faqs />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ServicesRoutes };
