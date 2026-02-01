import {Link} from "react-router-dom";
import "../css/NavBar.css"
import {useState} from "react";

function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">StreamNext</Link>
            </div>

            <button
                className="menu-btn"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

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