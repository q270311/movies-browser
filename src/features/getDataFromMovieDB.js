import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "0a7a30a768304b21322288db13dcdb24";

export const getMoviePopular = async ({ page }) => {
  const response = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const getGenres = async () => {
  const response = await axios.get(
    `${baseURL}/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data.genres;
};

export const getPersonPopular = async ({ page }) => {
  const response = await axios.get(
    `${baseURL}/person/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const getMovieDetails = async ({ movieID }) => {
  const response = await axios.get(
    `${baseURL}/movie/${movieID}?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const getMovieCredits = async ({ movieID }) => {
  const response = await axios.get(
    `${baseURL}/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const getPersonDetails = async ({ personID }) => {
  const response = await axios.get(
    `${baseURL}/person/${personID}?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const getPersonMovieCredits = async ({ personID }) => {
  const response = await axios.get(
    `${baseURL}/person/${personID}/combined_credits?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const searchMovie = async ({ page, query }) => {
  const response = await axios.get(
    `${baseURL}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
export const searchPerson = async ({ page, query }) => {
  const response = await axios.get(
    `${baseURL}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.data;
};
