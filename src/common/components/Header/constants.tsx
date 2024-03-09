import ContactIcon from '@mui/icons-material/Call';
import GalleryIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import RowingIcon from '@mui/icons-material/Rowing';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
export interface NavItem {
    id?: string;
    href?: string;
    text?: string;
    dropdown?: NavItem[];
    icon?: JSX.Element;
    description?: string;
    is_logo?: boolean;
    is_blank_target?: boolean;
}

export const NAVBAR_ITEMS: NavItem[] = [
    {
        text: 'Activities',
        href: '/activities',
        dropdown: [
            //FromDB
        ],
        id: 'activities',

        icon: <RowingIcon />,
    },
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
        text: 'Tips',
        href: '/services/tips',
        dropdown: [],
        id: 'services-tips',
        icon: <TipsAndUpdatesIcon />,
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
