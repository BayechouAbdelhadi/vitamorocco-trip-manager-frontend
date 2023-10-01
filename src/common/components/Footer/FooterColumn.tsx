import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../logo';
import './FooterColumn.scss';

function FooterColumn({ column }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="col">
            <div className="column-title" onClick={() => setExpanded(!expanded)}>
                {column.title ? <h3>{column.title}</h3> : <Logo />}
                {!column.logo && <i className={`fal fa-arrow-${expanded ? 'right transformed' : 'right'}`}></i>}
            </div>
            <div className={expanded ? 'expand expanded' : 'expand'}>
                <div className="columnlinks">
                    {' '}
                    {column.links?.map((link: any) => (
                        <FooterLink key={link.title} link={link} column={column} />
                    ))}
                </div>
            </div>
        </div>
    );
}
interface FooterLinkProps {
    column: any;
    link: any;
}

function FooterLink({ link, column }: FooterLinkProps) {
    // open external link in a new tab
    if (column.blank) {
        return (
            <a href={link.link} className="link-conttainer">
                <i className={link.icon}></i>
                <span>{link.text}</span>
            </a>
        );
    }

    // internal link (belongs to this website)
    return (
        <HashLink smooth to={link.link + '#top'} className="link-container">
            <i className={link.icon}></i>
            <p>{column.isLinkTitle ? link.title : link.text}</p>
        </HashLink>
    );
}

export default FooterColumn;
