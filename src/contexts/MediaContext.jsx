import { createContext, useState, useContext, useEffect } from "react";

const MediaContext = createContext();

export const useMediaContext = () => useContext(MediaContext);

export const MediaProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, []);

    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add Media or series to favorites
    const addToFavorites = (item) => {
        setFavorites((prev) => {
            const alreadyExists = prev.some(
                fav => fav.id === item.id && fav.media_type === item.media_type
            );

            if (alreadyExists) return prev;

            return [...prev, item];
        });
    };

    // Remove Media or series from favorites
    const removeFromFavorites = (id, mediaType) => {
        setFavorites((prev) =>
            prev.filter(
                item => !(item.id === id && item.media_type === mediaType)
            )
        );
    };

    // Check if Media or series is favorite
    const isFavorite = (id, mediaType) => {
        return favorites.some(
            item => item.id === id && item.media_type === mediaType
        );
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MediaContext.Provider value={value}>
            {children}
        </MediaContext.Provider>
    );
};
