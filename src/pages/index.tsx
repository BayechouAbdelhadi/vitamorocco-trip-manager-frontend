import { lazyComponent } from '../common/utils';
import { ServicesRoutes } from './Services';
import { ToursRoutes } from './Tours';
import { ExcursionsRoutes } from './Excursions';
import { ActivitiesRoutes } from './Activities';

import { Tours } from './Tours/Tours';
const Home = lazyComponent('Home', import('./Home/Home'));
const Excursions = lazyComponent('Excursions', import('./Excursions/Excursions'));
const Contact = lazyComponent('Contact', import('./Contact/Contact'));
const Activities = lazyComponent('Activities', import('./Activities/Activities'));
const About = lazyComponent('About', import('./About/About'));

export const pages = [
    { route: '/', element: <Home /> },
    { route: '/about', element: <About /> },
    { route: '/activities/*', element: <ActivitiesRoutes /> },
    { route: '/contact', element: <Contact /> },
    { route: '/excursions/*', element: <ExcursionsRoutes /> },
    { route: '/services/*', element: <ServicesRoutes /> },
    { route: '/tours/*', element: <ToursRoutes /> },
];
