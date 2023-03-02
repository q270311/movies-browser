import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "0a7a30a768304b21322288db13dcdb24";

export const getMoviePopular = async ({ page }) => {
    const response = await axios.get(`${baseURL}/movie/popular?apiKey=${apiKey}&language=en-US&page=${page}`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};
export const getGenres = async () => {
    const response = await axios.get(`${baseURL}/genre/movie/list?apiKey=${apiKey}&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data.genres;
};

export const getPersonPopular = async ({ page }) => {
    const response = await axios.get(`${baseURL}/person/popular?apiKey=${apiKey}&language=en-US&page=${page}`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};
export const getMovieDetails = async ({ movieID }) => {
    const response = await axios.get(`${baseURL}/movie/${movieID}?apiKey=${apiKey}&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};
export const getMovieCredits = async ({ movieID }) => {
    const response = await axios.get(`${baseURL}/movie/${movieID}/credits?apiKey=${apiKey}&language=en-US`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};