import useNavBar from '../../../hooks/front/useNavBar';
import { NavItem } from '../Header/constants';
import FooterColumn from './FooterColumn';
import { FOOTER_LINKS } from './constants';

export default function FooterColumns() {
    const navLinks = useNavBar();
    const excursionNavlink = navLinks.find((n) => n.id === 'excursions');
    const toursNavlink = navLinks.find((n) => n.id === 'tours');
    const links:NavItem[] = [
                {
                    is_logo: true,
                },
                { ...excursionNavlink },
                { ...toursNavlink },
                ...FOOTER_LINKS,
            ]
    return (
        <div className="footer-grid">
            {links?.map((footerLink, i) => {
                return <FooterColumn key={`${footerLink.text}-${i}`} navItem={footerLink} />;
            })}
        </div>
    );
}
