import { NavItem } from '../Header/constants';

const CONTACT_BOXES = [
    {
        text: '(+212) 662310037',
        href: 'tel:212662310037',
        is_blank_target: true
    },
    {
        text: 'contact@vitamorocco.com',
        href: 'mailto:contact@vitamorocco.com',
        is_blank_target: true
    },
    {
        text: 'vitamarruecos@gmail.com',
        href: 'mailto:vitamarruecos@gmail.com',
        is_blank_target: true
    },
    {
        text: 'Contact Us',
        href: '/contact',
    },
];

const POLICIES = [
    {
        text: 'About Us',
        href: '/about',
    },
    {
        text: 'Terms and Conditions',
        href: 'services/terms_and_conditions',
    },
    {
        text: 'FAQs',
        href: 'services/faqs',
    },
];

export const FOOTER_LINKS: NavItem[] = [
    {
        text: 'Contacts',
        dropdown: CONTACT_BOXES,
    },
    {
        text: 'Company',
        dropdown: POLICIES,
    },
];
