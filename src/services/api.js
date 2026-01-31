const API_KEY = "0db6e97f837daab5b036edb29fe1d497"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getPopularSeries = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchSeries = async (query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getPopularActors = async () => {
    const response = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchActors = async (query) => {
    const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getMediaDetails = async (mediaType, id) => {
    const response = await fetch(`${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};

export const getActorDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);
    return response.json();
};

export const getActorCredits = async (id) => {
    const response = await fetch(`${BASE_URL}/person/${id}/combined_credits?api_key=${API_KEY}`);
    return response.json();
};
