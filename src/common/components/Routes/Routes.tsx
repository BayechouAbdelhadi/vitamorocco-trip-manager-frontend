import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { lazyComponent } from '../../utils';

const Home = lazyComponent('Home', import('../../../pages/Home/Home'));
const PageNotFound = lazyComponent(
  'PageNotFound',
  import('../../../pages/PageNotFound/PageNotFound')
);

export const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route element={<Home />} path="/" />
    <Route element={<PageNotFound />} path="*" />
  </RoutesRRD>
);
