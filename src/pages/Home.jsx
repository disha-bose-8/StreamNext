import { Link } from "react-router-dom";
import "../css/Home.css"

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>StreamNext</h1>
                <p>Explore movies, series, and stars — all in one place</p>
            </section>

            {/* Navigation Cards */}
            <section className="home-nav">
                <Link to="/movies" className="home-card">
                    <h2>🎬 Movies</h2>
                    <p>Browse popular and trending movies</p>
                </Link>

                <Link to="/series" className="home-card">
                    <h2>📺 Series</h2>
                    <p>Explore popular TV shows and series</p>
                </Link>

                <Link to="/actors" className="home-card">
                    <h2>⭐ Actors</h2>
                    <p>Discover famous actors and their works</p>
                </Link>
            </section>
        </div>
    );
}

export default Home;
