import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils/lazy';
const Activity = lazyComponent(import('./Activity'), 'Activity');
const Activities = lazyComponent(import('./Activities'), 'Activities');
const PageNotFound = lazyComponent(import('../PageNotFound/PageNotFound'), 'PageNotFound');

const ActivitiesRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route path="" element={<Activities />} />
                <Route path=":activityId" element={<Activity />} />
                <Route element={<PageNotFound />} path="*" />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ActivitiesRoutes };
