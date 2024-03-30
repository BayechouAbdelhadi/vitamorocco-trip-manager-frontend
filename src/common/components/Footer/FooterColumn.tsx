import ExpandIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavItem } from '../Header/constants';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo';


import './FooterColumn.scss';

function FooterLink({ text, href, is_blank_target: isBlankTarget = false }: NavItem) {
    // open external link
    if (isBlankTarget) {
        return (
            <a href={href}>
                {text}
            </a>
        );
    }

    // internal link (belongs to this website)
    return (
        <HashLink smooth to={`${href}#top`}>
            {text}
        </HashLink>
    );
}
interface FooterColumnProps {
    navItem: NavItem;
}
function FooterColumn({ navItem: { text, is_logo: isLogo = false, dropdown = [] } }: FooterColumnProps) {
    const [expanded, setExpanded] = useState(false);

    const { t } = useTranslation();

    return (
        <div>
            <div className="column-title" onClick={() => setExpanded(!expanded)}>

                {text ? <h3>{t(text)}</h3> : <Logo />}

                {!isLogo && dropdown.length != 0 && (
                    <ExpandIcon
                        className={`arrow-icon ${expanded ? 'transformed' : ''}`}
                        sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}
                    />
                )}
            </div>
            <div className={expanded ? 'expand expanded' : 'expand'}>
                <div className="column-links">
                    {dropdown?.map((link, i) => (
                        <FooterLink
                            key={`${link.text}-${i}`}
                            text={link.text}
                            href={link.href}
                            is_blank_target={link.is_blank_target}
                            id={link.id}
                            dropdown={link.dropdown}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterColumn;
