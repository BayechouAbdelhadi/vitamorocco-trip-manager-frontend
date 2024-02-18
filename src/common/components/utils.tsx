import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/ShareLocation';
import { Excursion } from '../types/excursion';
import { NAVBAR_ITEMS, NavItem } from './Header/constants';

export const TOUR_ORIGIN_QUERY_NAME = 'origin';
export const buildnavbarItems = (excursions: Excursion[], availableToursOrigins: string[]): NavItem[] => {
    return [
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
                {
                    text: 'Popular excursions',
                    href: `/excursions`,
                    id: 'popular',
                    dropdown: [],
                },
                ...excursions.map((e) => ({
                    text: e.title,
                    href: `/excursions/${e.id}`,
                    id: e.id,
                    dropdown: [],
                })),
            ],
            id: 'excursions',
            icon: <DirectionsBusIcon />,
        },
        {
            text: 'Tours',
            href: '/tours',
            dropdown: [
                {
                    text: 'Popular tours',
                    href: `/tours`,
                    id: 'popular',
                    dropdown: [],
                },
                ...availableToursOrigins.map((o) => ({
                    text: `From ${o}`,
                    href: `/tours?${TOUR_ORIGIN_QUERY_NAME}=${o}`,
                    id: o,
                    dropdown: [],
                })),
            ],
            id: 'tours',

            icon: <TourIcon />,
        },
        ...NAVBAR_ITEMS,
    ];
};
