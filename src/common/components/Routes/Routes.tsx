import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { pages } from '../../../pages';
import { lazyComponent } from '../../utils';

const PageNotFound = lazyComponent('PageNotFound', import('../../../pages/PageNotFound/PageNotFound'));

export const Routes = (): JSX.Element => (
    <RoutesRRD>
        {pages.map((r) => (
            <Route key={r.route} element={r.element} path={r.route} />
        ))}
        <Route element={<PageNotFound />} path="*" />
    </RoutesRRD>
);
