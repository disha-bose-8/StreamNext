import MediaCard from "../components/MediaCard";
import { useState, useEffect } from "react";
import { searchSeries, getPopularSeries } from "../services/api";
import "../css/Media.css";

function Series() {
    const [searchQuery, setSearchQuery] = useState("");
    const [series, setSeries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularSeries = async () => {
            try {
                const popularSeries = await getPopularSeries();
                setSeries(popularSeries);
            } catch (err) {
                console.log(err);
                setError("Failed to load series...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularSeries();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchSeries(searchQuery);
            setSeries(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search series...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="media-page">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for series..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {series.map((show) => (
                        <MediaCard
                            key={show.id}
                            media={{ ...show, media_type: "tv" }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Series;
