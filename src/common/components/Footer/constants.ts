import { NavItem } from '../Header/constants';

const CONTACT_BOXES = [
    {
        text: '(+212) 662310037',
        href: 'tel:212662310037',
    },
    {
        text: 'contact@vitamorocco.com',
        href: 'mailto:contact@vitamorocco.com',
    },
    {
        text: 'vitamorocco@gmail.com',
        href: 'mailto:vitamarruecos@gmail.com',
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
    // {
    //   text: 'Privacy Policy',
    //   href: 'services/privacy',
    // },
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
    // {
    //   text: 'Excursions',
    //   href: EXCURSIONS,
    // },
    // {
    //   text: 'Tours',
    //   href: TOURS,
    // },
    {
        text: 'Contacts',
        dropdown: CONTACT_BOXES,
    },
    {
        text: 'Company',
        dropdown: POLICIES,
    },
];
