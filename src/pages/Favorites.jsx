import "../css/Favorites.css";
import { useMediaContext } from "../contexts/MediaContext";
import MediaCard from "../components/MediaCard";

function Favorites() {
    const { favorites } = useMediaContext();

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
                    <MediaCard key={`${item.media_type}-${item.id}`} media={item} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
