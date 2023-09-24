import { Link } from "react-router-dom";
import "./Logo.css";
function Logo() {
    return (
        <Link className="logo" to="">
            <img src="https://i.imgur.com/QQ8FTjR.png" alt="" />
            <span>
                <strong>Vita </strong>
                <span>Marruecos</span>
            </span>
        </Link>
    );
}
export default Logo;
