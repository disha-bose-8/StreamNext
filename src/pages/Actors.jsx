import { useState, useEffect } from "react";
import { searchActors, getPopularActors } from "../services/api";
import "../css/Media.css";
import "../css/Actors.css";
import { Link } from "react-router-dom";

function Actors() {
    const [searchQuery, setSearchQuery] = useState("");
    const [actors, setActors] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPopularActors()
            .then(data => setActors(data))
            .catch(() => setError("Failed to load actors"))
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setLoading(true);
        try {
            const results = await searchActors(searchQuery);
            setActors(results);
            setError(null);
        } catch {
            setError("Failed to search actors");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="media-page">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    className="search-input"
                    placeholder="Search actors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="actors-grid">
                    {actors.map(actor => (
                        <Link
                            key={actor.id}
                            to={`/actor/${actor.id}`}
                            className="actor-card"
                        >
                            <div className="actor-image">
                                <img
                                    src={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                                            : "https://via.placeholder.com/300x450?text=No+Image"
                                    }
                                    alt={actor.name}
                                />
                                <div className="actor-overlay"></div>
                            </div>

                            <div className="actor-info">
                                <h3>{actor.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Actors;
