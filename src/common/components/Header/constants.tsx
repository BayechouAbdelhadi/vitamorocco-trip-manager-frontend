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
    anchorEl: HTMLElement | null;
    icon?: JSX.Element;
}

export const NAVBAR_ITEMS: NavItem[] = [
    {
        text: 'Home',
        href: '/',
        dropdown: [],
        id: 'home',
        anchorEl: null,
        icon: <HomeIcon />,
    },
    {
        text: 'Services',
        href: '/services',
        dropdown: [
            {
                text: 'Gallery',
                href: '/servies/gallery',
                dropdown: [],
                id: 'servies-gallery',
                anchorEl: null,
            },
            {
                text: 'FAQs',
                href: '/servies/faqs',
                dropdown: [],
                id: 'servies-faqs',
                anchorEl: null,
            },
            {
                text: 'Tips',
                href: '/servies/tips',
                dropdown: [],
                id: '/servies-tips',
                anchorEl: null,
            },
        ],
        id: 'services',
        anchorEl: null,
        icon: <ServiceIcon />,
    },
    {
        text: 'Excursions',
        href: '/excursions',
        dropdown: [
            //FromDB
        ],
        id: 'excursions',
        anchorEl: null,
        icon: <EventAvailableIcon />,
    },
    {
        text: 'Tours',
        href: '/tours',
        dropdown: [
            //FromDB
        ],
        id: 'tours',
        anchorEl: null,
        icon: <CabinIcon />,
    },
    {
        text: 'Activities',
        href: '/activities',
        dropdown: [
            //FromDB
        ],
        id: 'activities',
        anchorEl: null,
        icon: <RowingIcon />,
    },
    {
        text: 'About',
        href: '/about',
        dropdown: [],
        id: 'about',
        anchorEl: null,
        icon: <InfoIcon />,
    },
    {
        text: 'Contacts',
        href: '/contacts',
        dropdown: [
            //FromDB
        ],
        id: 'contacts',
        anchorEl: null,
        icon: <ContactPageIcon />,
    },
];
