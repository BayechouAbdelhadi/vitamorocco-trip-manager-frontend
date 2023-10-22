import ContactIcon from '@mui/icons-material/Call';
import GalleryIcon from '@mui/icons-material/Collections';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TourIcon from '@mui/icons-material/ShareLocation';
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
        text: 'Excursions',
        href: '/excursions',
        dropdown: [
            //FromDB
        ],
        id: 'excursions',

        icon: <DirectionsBusIcon />,
    },
    {
        text: 'Tours',
        href: '/tours',
        dropdown: [
            //FromDB
        ],
        id: 'tours',

        icon: <TourIcon />,
    },
    // {
    //     text: 'Activities',
    //     href: '/activities',
    //     dropdown: [
    //         //FromDB
    //     ],
    //     id: 'activities',

    //     icon: <RowingIcon />,
    // },
    // {
    //     text: 'Services',
    //     href: '/services',
    //     dropdown: [
    //         {
    //             text: 'Gallery',
    //             href: '/services/gallery',
    //             dropdown: [],
    //             id: 'services-gallery',
    //         },
    //         {
    //             text: 'FAQs',
    //             href: '/services/faqs',
    //             dropdown: [],
    //             id: 'services-faqs',
    //         },
    //         {
    //             text: 'Tips',
    //             href: '/services/tips',
    //             dropdown: [],
    //             id: '/services-tips',
    //         },
    //     ],
    //     id: 'services',

    //     icon: <ServiceIcon />,
    // },
    {
        text: 'Gallery',
        href: '/services/gallery',
        dropdown: [],
        id: 'services-gallery',
        icon: <GalleryIcon />,
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

        icon: <ContactIcon />,
    },
];
