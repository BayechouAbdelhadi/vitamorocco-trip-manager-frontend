import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils';
const Tips = lazyComponent('Tips', import('./Tips'));
const Faqs = lazyComponent('Faqs', import('./Faqs'));
const Gallery = lazyComponent('Gallery', import('./Gallery'));
const Services = lazyComponent('Services', import('./Services'));
const PageNotFound = lazyComponent('PageNotFound', import('../PageNotFound/PageNotFound'));

const ServicesRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="tips" element={<Tips />} />
                <Route path="Faqs" element={<Faqs />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ServicesRoutes };
