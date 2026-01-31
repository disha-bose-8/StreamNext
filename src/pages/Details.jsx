import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMediaDetails } from "../services/api";
import "../css/Details.css";

function Details() {
    const { mediaType, id } = useParams();
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMediaDetails(mediaType, id).then(data => {
            setMedia(data);
            setLoading(false);
        });
    }, [mediaType, id]);

    if (loading) return <p className="loading">Loading...</p>;
    if (!media) return <p>Error loading details</p>;

    return (
        <div className="details-page">
            <div className="details-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                    alt={media.title || media.name}
                />
            </div>

            <div className="details-info">
                <h1>{media.title || media.name}</h1>

                <p className="rating">
                    ⭐ {media.vote_average.toFixed(1)} / 10
                </p>

                <p className="overview">{media.overview}</p>

                <div className="meta">
          <span>
            {media.release_date?.split("-")[0] ||
                media.first_air_date?.split("-")[0]}
          </span>
                    <span>
            {media.genres.map(g => g.name).join(", ")}
          </span>
                </div>
            </div>
        </div>
    );
}

export default Details;
