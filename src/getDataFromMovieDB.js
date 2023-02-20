import axios from "axios";

export const getMoviePopular = async ({ page }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0a7a30a768304b21322288db13dcdb24&language=en-US&page=${page}`);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};