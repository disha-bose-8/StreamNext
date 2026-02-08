import "../css/Favorites.css";
import { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";

import { API_BASE } from "../api";
import { getUserId } from "../utils/user";

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = getUserId();

        fetch(`${API_BASE}/favourites?userId=${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setFavorites(data.items || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load favorites:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="favorites-empty">
                <h2>Loading favorites...</h2>
            </div>
        );
    }

    if (!favorites || favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorites Yet</h2>
                <p>Start adding movies or series to your favorites!</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((item) => (
                    <MediaCard
                        key={`${item.mediaType}-${item.itemId}`}
                        media={{
                            ...item,
                            id: item.itemId,
                            media_type: item.mediaType,
                            poster_path: item.poster
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
