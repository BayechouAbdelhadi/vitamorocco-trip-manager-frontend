// import { NavHashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export interface NavLink {
    id: string;
    href: string;
    text: string;
    dropdown: NavLink[];
    anchorEl: HTMLElement | null;
}

export interface NavBarLinkProps {
    link: NavLink;
}
function NavBarLink({ link }: NavBarLinkProps) {
    return (
        <div>
            <Link
                to={link.href + '#top'}
                // exact={link.exact}
                // activeClassName="activelink"
                // onClick={() => {}}
                // isActive={(match, location) => {
                //     if (match) return true;
                // }}
            >
                <span>{link.text}</span>
                <div className="dot"></div>
            </Link>{' '}
            {link.dropdown && <Dropdown link={link} />}
        </div>
    );
}
export default NavBarLink;
