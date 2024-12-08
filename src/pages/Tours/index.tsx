import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
const Tour = lazyComponent(import('./Tour'), 'Tour');
const Tours = lazyComponent(import('./Tours'), 'Tours');
const PageNotFound = lazyComponent(import('../PageNotFound/PageNotFound'), 'PageNotFound');

const ToursRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route path="" index element={<Tours />} />
                <Route path=":tourId" element={<Tour />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ToursRoutes };
