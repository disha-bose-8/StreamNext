import "../css/MediaCard.css";
import { useMediaContext } from "../contexts/MediaContext";

function MediaCard({ media }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMediaContext();
    const mediaType = media.media_type;
    const favorite = isFavorite(media.id, mediaType);

    const title = media.title || media.name;
    const year =
        media.release_date?.split("-")[0] ||
        media.first_air_date?.split("-")[0];

    const onFavoriteClick = (e) => {
        e.preventDefault();
        favorite
            ? removeFromFavorites(media.id, mediaType)
            : addToFavorites(media);
    };

    return (
        <div className="media-card">
            <div className="media-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                    alt={title}
                />
                <div className="media-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                    >
                        ♥
                    </button>
                </div>
            </div>

            <div className="media-info">
                <h3>{title}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
}

export default MediaCard;
