import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>StreamNext</h1>
                <p>Discover trending movies and TV series</p>
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
            </section>
        </div>
    );
}

export default Home;
