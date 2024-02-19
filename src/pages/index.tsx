import { lazyComponent } from '../common/utils/lazy';
import { ServicesRoutes } from './Services';
import { ToursRoutes } from './Tours';
import { ExcursionsRoutes } from './Excursions';
import { ActivitiesRoutes } from './Activities';
import ComingSoon from './ComingSoon';
const Home = lazyComponent('Home', import('./Home/Home'));
const Contact = lazyComponent('Contact', import('./Contact/Contact'));
const About = lazyComponent('About', import('./About/About'));

export const pages = [
    // { route: '/', element: <ComingSoon /> },
    { route: '/', element: <Home /> },
    { route: '/about', element: <About /> },
    { route: '/activities/*', element: <ActivitiesRoutes /> },
    { route: '/contact', element: <Contact /> },
    { route: '/excursions/*', element: <ExcursionsRoutes /> },
    { route: '/services/*', element: <ServicesRoutes /> },
    { route: '/tours/*', element: <ToursRoutes /> },
];
