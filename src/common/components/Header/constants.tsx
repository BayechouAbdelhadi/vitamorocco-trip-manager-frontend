import ContactIcon from '@mui/icons-material/Call';
import GalleryIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
export interface NavItem {
    id?: string;
    href?: string;
    text?: string | { key: string; args: Record<string, string> };
    dropdown?: NavItem[];
    icon?: JSX.Element;
    description?: string;
    is_logo?: boolean;
    is_blank_target?: boolean;
}

export const NAVBAR_ITEMS: NavItem[] = [
    // {
    //     text: 'gallery',
    //     href: '/services/gallery',
    //     dropdown: [],
    //     id: 'services-gallery',
    //     icon: <GalleryIcon />,
    // },
    {
        text: 'tips',
        href: '/services/tips',
        dropdown: [],
        id: 'services-tips',
        icon: <TipsAndUpdatesIcon />,
    },
    {
        text: 'about',
        href: '/about',
        dropdown: [],
        id: 'about',
        icon: <InfoIcon />,
    },
    {
        text: 'contact.title',
        href: '/contact',
        dropdown: [
            //FromDB
        ],
        id: 'contact',
        icon: <ContactIcon />,
    },
];
