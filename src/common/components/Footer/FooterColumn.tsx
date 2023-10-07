import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './FooterColumn.scss';

interface FooterLinkProps {
    column: any;
    link: any;
}

function FooterLink({ link, column }: FooterLinkProps) {
    // open external link in a new tab
    if (column.blank) {
        return (
            <a href={link.link}>
                {link.text}
            </a>
        );
    }

    // internal link (belongs to this website)
    return (
        <HashLink smooth to={link.link + '#top'}>
            {column.isLinkTitle ? link.title : link.text}
        </HashLink>
    );
}

function FooterColumn({ column }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="column-title" onClick={() => setExpanded(!expanded)}>
                {column.title ? <h3>{column.title}</h3> : <Logo />}
                {!column.logo && <ArrowForwardIcon className={`arrow-icon ${expanded ? 'transformed' : ''}`}/>}
            </div>
            <div className={expanded ? 'expand expanded' : 'expand'}>
                <div className="column-links">
                    {column.links?.map((link: any) => (
                        <FooterLink key={link.title} link={link} column={column} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterColumn;
