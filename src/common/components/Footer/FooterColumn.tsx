import ExpandIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo';
import './FooterColumn.scss';

interface FooterColumnProps {
    title?: string;
    description?: string;
    link?: string;
    is_logo?: boolean;
    is_blank_target?: boolean;
    links?: FooterColumnProps[];
    icon?: JSX.Element;
}

function FooterLink({ title, link, is_blank_target: isBlankTarget = false }: FooterColumnProps) {
    // open external link in a new tab
    if (isBlankTarget) {
        return (
            <a href={link} target="__blank">
                {title}
            </a>
        );
    }

    // internal link (belongs to this website)
    return (
        <HashLink smooth to={`${link}#top`}>
            {title}
        </HashLink>
    );
}

function FooterColumn({ title, is_logo: isLogo = false, links = [] }: FooterColumnProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="column-title" onClick={() => setExpanded(!expanded)}>
                {title ? <h3>{title}</h3> : <Logo />}
                {!isLogo && <ExpandIcon className={`arrow-icon ${expanded ? 'transformed' : ''}`} />}
            </div>
            <div className={expanded ? 'expand expanded' : 'expand'}>
                <div className="column-links">
                    {links?.map((link, i) => (
                        <FooterLink
                            key={`${link.title}-${i}`}
                            title={link.title}
                            link={link.link}
                            is_blank_target={link.is_blank_target}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterColumn;
