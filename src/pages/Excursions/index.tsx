import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
const Excursion = lazyComponent(import('./Excursion'), 'Excursion');
const Excursions = lazyComponent(import('./Excursions'), 'Excursions');
const PageNotFound = lazyComponent(import('../PageNotFound/PageNotFound'), 'PageNotFound');

const ExcursionsRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index path="" element={<Excursions />} />
                <Route path=":excursionId" element={<Excursion />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ExcursionsRoutes };
