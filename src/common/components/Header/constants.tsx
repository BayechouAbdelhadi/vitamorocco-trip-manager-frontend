import CabinIcon from '@mui/icons-material/Cabin';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import { default as ServiceIcon } from '@mui/icons-material/HomeRepairService';
import RowingIcon from '@mui/icons-material/Rowing';

import InfoIcon from '@mui/icons-material/Info';

export interface NavItem {
    id: string;
    href: string;
    text: string;
    dropdown: NavItem[];
    icon?: JSX.Element;
}

export const NAVBAR_ITEMS: NavItem[] = [
    {
        text: 'Home',
        href: '/',
        dropdown: [],
        id: 'home',

        icon: <HomeIcon />,
    },
    {
        text: 'Services',
        href: '/services',
        dropdown: [
            {
                text: 'Gallery',
                href: '/services/gallery',
                dropdown: [],
                id: 'services-gallery',
            },
            {
                text: 'FAQs',
                href: '/services/faqs',
                dropdown: [],
                id: 'services-faqs',
            },
            {
                text: 'Tips',
                href: '/services/tips',
                dropdown: [],
                id: '/services-tips',
            },
        ],
        id: 'services',

        icon: <ServiceIcon />,
    },
    {
        text: 'Excursions',
        href: '/excursions',
        dropdown: [
            //FromDB
        ],
        id: 'excursions',

        icon: <EventAvailableIcon />,
    },
    {
        text: 'Tours',
        href: '/tours',
        dropdown: [
            //FromDB
        ],
        id: 'tours',

        icon: <CabinIcon />,
    },
    {
        text: 'Activities',
        href: '/activities',
        dropdown: [
            //FromDB
        ],
        id: 'activities',

        icon: <RowingIcon />,
    },
    {
        text: 'About',
        href: '/about',
        dropdown: [],
        id: 'about',

        icon: <InfoIcon />,
    },
    {
        text: 'Contact',
        href: '/contact',
        dropdown: [
            //FromDB
        ],
        id: 'contact',

        icon: <ContactPageIcon />,
    },
];
