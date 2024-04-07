import { NavItem } from '../Header/constants';

const CONTACT_BOXES = [
    {
        text: '(+212) 662310037',
        href: 'tel:212662310037',
        is_blank_target: true,
    },
    {
        text: 'contact@vitamorocco.com',
        href: 'mailto:contact@vitamorocco.com',
        is_blank_target: true,
    },
    {
        text: 'vitamarruecos@gmail.com',
        href: 'mailto:vitamarruecos@gmail.com',
        is_blank_target: true,
    },
    {
        text: 'contact.title',
        href: '/contact',
    },
];

const POLICIES = [
    {
        text: 'about',
        href: '/about',
    },
    {
        text: 'terms_and_conditions',
        href: 'services/terms_and_conditions',
    },
    {
        text: 'FAQs',
        href: 'services/faqs',
    },
];

export const FOOTER_LINKS: NavItem[] = [
    {
        text: 'contacts',
        dropdown: CONTACT_BOXES,
    },
    {
        text: 'company',
        dropdown: POLICIES,
    },
];
