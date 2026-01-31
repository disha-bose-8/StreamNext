import {Link} from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">StreamNext</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/movies" className="nav-link">Movies</Link>
                <Link to="/series" className="nav-link">Series</Link>
                <Link to="/actors" className="nav-link">Actors</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    );
}
export default NavBar;