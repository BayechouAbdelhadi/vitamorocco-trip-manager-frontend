import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import RowingIcon from '@mui/icons-material/Rowing';
import TourIcon from '@mui/icons-material/ShareLocation';
import { Activity } from '../types/activity';
import { Excursion } from '../types/excursion';
import { NAVBAR_ITEMS, NavItem } from './Header/constants';

export const TOUR_ORIGIN_QUERY_NAME = 'origin';

export const buildnavbarItems = (
    excursions: Excursion[],
    availableToursOrigins: string[],
    activities: Activity[]
): NavItem[] => {
    return [
        {
            text: 'home',
            href: '/',
            dropdown: [],
            id: 'home',

            icon: <HomeIcon />,
        },
        {
            text: 'excursions',
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
            text: 'tours',
            href: '/tours',
            dropdown: [
                {
                    text: 'Popular tours',
                    href: `/tours`,
                    id: 'popular',
                    dropdown: [],
                },
                ...availableToursOrigins.map((o) => ({
                    text: { key: 'from_origin', args: { o: o } },
                    href: `/tours?${TOUR_ORIGIN_QUERY_NAME}=${o}`,
                    id: o,
                    dropdown: [],
                })),
            ],
            id: 'tours',

            icon: <TourIcon />,
        },
        {
            text: 'activities.title',
            href: '/activities',
            dropdown: [
                {
                    text: 'Popular activities',
                    href: `/activities`,
                    id: 'popular',
                    dropdown: [],
                },
                //FromDB
                ...activities.map((a) => ({
                    text: a.title,
                    href: `/activities/${a.id}`,
                    id: a.id,
                    dropdown: [],
                })),
            ],
            id: 'activities',

            icon: <RowingIcon />,
        },
        ...NAVBAR_ITEMS,
    ];
};
