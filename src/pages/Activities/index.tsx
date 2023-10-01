import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils';
const Activity = lazyComponent('Activity', import('./Activity'));
const Activities = lazyComponent('Activities', import('./Activities'));

const ActivitiesRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index path="" element={<Activities />} />
                <Route path=":id" element={<Activity />} />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ActivitiesRoutes };
