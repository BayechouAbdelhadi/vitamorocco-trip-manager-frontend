import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils';
const Tour = lazyComponent('Tour', import('./Tour'));
const Tours = lazyComponent('Tours', import('./Tours'));

const ToursRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route path="" index element={<Tours />} />
                <Route path=":id" element={<Tour />} />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ToursRoutes };
