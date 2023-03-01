import axios from "axios";

export const getMoviePopular = async ({ page }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US&page=${page}`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};
export const getGenres = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data.genres;
};

export const getPersonPopular = async ({ page }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US&page=${page}`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};
export const getMovieDetails = async ({ movieID }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data.genres;
};
export const getMovieCredits = async ({ movieID }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data.genres;
};