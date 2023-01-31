import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return(
        <nav className="navigation">
            <div className="navigation__right">
                <Link to="/Login"><button className="navigation__login">Login</button></Link>
             </div>
        </nav>
    );
}

export default Navigation;