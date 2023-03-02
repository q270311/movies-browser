import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieId: 0,
        details: [],
        cast: [],
        crew: [],
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, { payload }) => {
            state.status = "loading";
            state.details = payload.details;
            console.log(state.details)
            state.cast = payload.credits.cast;
            state.crew = payload.credits.crew;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        getDetailsForMovie: (state, { payload }) => {
            state.movieId = payload.movieId;
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForMovie,
    fetchDataError,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCrew = (state) => selectMovieState(state).crew;
export const selectCast = (state) => selectMovieState(state).cast;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
