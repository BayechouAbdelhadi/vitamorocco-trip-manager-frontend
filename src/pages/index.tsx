import { lazyComponent } from '../common/utils/lazy';
import { ServicesRoutes } from './Services';
import { ToursRoutes } from './Tours';
import { ExcursionsRoutes } from './Excursions';
import { ActivitiesRoutes } from './Activities';
// import ComingSoon from './ComingSoon';
const Home = lazyComponent(import('./Home/Home'), 'Home',);
const Contact = lazyComponent(import('./Contact/Contact'), 'Contact',);
const About = lazyComponent(import('./About/About'), 'About');

export const pages = [
    // { route: '/', element: <ComingSoon /> },
    { route: '/', element: <Home /> },
    { route: '/about', element: <About /> },
    { route: '/contact', element: <Contact /> },
    { route: '/activities/*', element: <ActivitiesRoutes /> },
    { route: '/excursions/*', element: <ExcursionsRoutes /> },
    { route: '/services/*', element: <ServicesRoutes /> },
    { route: '/tours/*', element: <ToursRoutes /> },
];
