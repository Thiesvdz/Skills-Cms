import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return(
        <nav className="navigation">
            <figure className="nav__figure">
                <i className="fa-solid fa-globe nav__icon"></i>
            </figure>
            <ul className="nav__ul">
                <li className="nav__li">Home</li>
                <li className="nav__li">Benjito</li>
                <li className="nav__li">Benjoto</li> 
                <li className="nav__li">Contact</li> 
            </ul>
            <div className="navigation__right">
                <Link to="/Login"><button className="navigation__login">Login</button></Link>
            </div>
        </nav>
    );
}

export default Navigation;