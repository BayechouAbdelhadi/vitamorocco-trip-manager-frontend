import { Link } from "react-router-dom";
import "./Dropdown.css";
import { NavLink } from "./NavBarLink";

interface DropDownProps {
    link: NavLink;
}

function Dropdown({ link }: DropDownProps) {
    const optionsrow = link.dropdown?.map((option) => {
        return (
            <Link key={link.href} to={link.href}>
                <span>
                    <span>{option.text}</span>
                </span>
                <i className="fad fa-chevron-right"></i>
            </Link>
        );
    });

    return <div className="dropdown">{optionsrow}</div>;
}
export default Dropdown;
