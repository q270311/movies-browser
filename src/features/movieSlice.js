import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieId: 0,
        details: [],       
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";            
            state.details = payload.data;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        getDetailsForMovie: (state, {payload}) => {
            state.movieId = payload.data.id;
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
export const selectStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
