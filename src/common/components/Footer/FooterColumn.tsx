import ExpandIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { NavItem } from '../Header/constants';
import Logo from '../Logo';
import parse from 'html-react-parser';

import './FooterColumn.scss';

function FooterLink({ text, href, is_blank_target: isBlankTarget = false }: NavItem) {
    const { t } = useTranslation();
    if (!text) return null;
    // open external link
    if (isBlankTarget) {
        return <a href={href}>{parse(typeof text === 'string' ? t(text) : t(text.key, text.args))}</a>;
    }

    // internal link (belongs to this website)
    return (
        <HashLink smooth to={`${href}#top`}>
            {parse(typeof text === 'string' ? t(text) : t(text.key, text.args))}
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
                {text ? <h3>{parse(typeof text === 'string' ? t(text) : t(text.key, text.args))}</h3> : <Logo />}

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
