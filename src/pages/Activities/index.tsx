import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils';
const Activity = lazyComponent('Activity', import('./Activity'));
const Activities = lazyComponent('Activities', import('./Activities'));
const PageNotFound = lazyComponent('PageNotFound', import('../PageNotFound/PageNotFound'));

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
