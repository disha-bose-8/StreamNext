import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActorDetails, getActorCredits } from "../services/api";
import {Link} from "react-router-dom";
import "../css/ActorDetails.css";
import "../css/MediaCard.css"

function ActorDetails() {
    const { id } = useParams();
    const [actor, setActor] = useState(null);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const loadActor = async () => {
            try {
                const details = await getActorDetails(id);
                const creditData = await getActorCredits(id);

                setActor(details);
                setCredits(creditData.cast || []);
            } catch (err) {
                console.error(err);
            }
        };

        loadActor();
    }, [id]);

    if (!actor) return <p className="loading">Loading actor...</p>;

    return (
        <div className="actor-details">

            {/* LEFT SIDE */}
            <div className="actor-left">
                <img
                    src={
                        actor.profile_path
                            ? `https://image.tmdb.org/t/p/w400${actor.profile_path}`
                            : "https://via.placeholder.com/400x600?text=No+Image"
                    }
                    alt={actor.name}
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="actor-right">
                <h1>{actor.name}</h1>

                <p className="actor-meta">
                    {actor.birthday || "Unknown"} • {actor.place_of_birth || "Unknown"}
                </p>

                <p className="actor-bio">
                    {actor.biography || "No biography available."}
                </p>

                <h3>Known For</h3>

                <div className="known-grid">
                    {credits.slice(0, 8).map(item => (
                        <Link
                            key={item.id}
                            to={`/details/${item.media_type}/${item.id}`}
                            className="media-card"
                        >
                            <img
                                src={
                                    item.poster_path
                                        ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                                        : "https://via.placeholder.com/300x450?text=No+Image"
                                }
                                alt={item.title || item.name}
                            />


                        </Link>

                    ))}

                </div>
            </div>

        </div>
    );

}

export default ActorDetails;
