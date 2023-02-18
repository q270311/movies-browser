import { createSlice } from "@reduxjs/toolkit";

const popularMovieSlice = createSlice({
    name: "popularMovie",
    initialState: {
        page: 1,
        movies: [],
        status: "loading"   //success, loading or error
    },
    reducers: {
        fetchPopularMovieSuccess: (state, { payload }) => {
            state.movies = payload;
            state.status = "success";
        },
        fetchPopularMovieError: (state) => {
            state.status = "error";
        },
    },
});
export const {
    fetchPopularMovieSuccess,
    fetchPopularMovieError,
} = popularMovieSlice.actions;

export const selectPopularMovieState = (state) => state.popularMovie;
export const selectPopularMovie = (state) => selectPopularMovieState(state).movies;
export const selectStatus = (state) => selectPopularMovieState(state).status;

export default popularMovieSlice.reducer;
