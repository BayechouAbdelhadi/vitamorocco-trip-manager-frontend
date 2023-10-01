import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../common/components/ErrorBoundary/ErrorBoundaryRoutes';
import { lazyComponent } from '../../common/utils';
const Excursion = lazyComponent('Excursion', import('./Excursion'));
const Excursions = lazyComponent('Excursions', import('./Excursions'));

const ExcursionsRoutes = () => {
    return (
        <ErrorBoundaryRoutes>
            <Route path="">
                <Route index path="" element={<Excursions />} />
                <Route path=":id" element={<Excursion />} />
            </Route>
        </ErrorBoundaryRoutes>
    );
};

export { ExcursionsRoutes };
