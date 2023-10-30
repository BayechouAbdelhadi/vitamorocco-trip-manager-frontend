import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
const Excursion = lazyComponent('Excursion', import('./Excursion'));
const Excursions = lazyComponent('Excursions', import('./Excursions'));
const PageNotFound = lazyComponent('PageNotFound', import('../PageNotFound/PageNotFound'));

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
