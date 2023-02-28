import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieData",
    initialState: {
        page: 1,
        totalPages: 0,
        totalResults: 0,
        movies: [],
        genres: [],          
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";            
            state.genres = payload.genres;
            state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
            state.totalResults = payload.data.total_results;
            state.movies = payload.data.results;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        goToPage: (state, { payload }) => {
            state.page = payload.page;
        },
    },
});
export const {
    fetchDataSuccess,
    fetchDataError,
    goToPage,
} = movieListSlice.actions;

export const selectMovieListState = (state) => state.movieData;
export const selectPage = (state) => selectMovieListState(state).page;
export const selectTotalPages = (state) => selectMovieListState(state).totalPages;
export const selectTotalResults = (state) => selectMovieListState(state).totalResults;
export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectGenres = (state) => selectMovieListState(state).genres;
export const selectStatus = (state) => selectMovieListState(state).status;

export default movieListSlice.reducer;
