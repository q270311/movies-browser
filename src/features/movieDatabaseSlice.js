import { createSlice } from "@reduxjs/toolkit";

const movieDatabaseSlice = createSlice({
    name: "movieDatabase",
    initialState: {
        page: 1,
        totalPages: 0,
        totalResults: 0,
        data: [],
        genres: [],          
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";            
            state.genres = payload.genres;
            state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
            state.totalResults = payload.data.total_results;
            state.data = payload.data.results;
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
} = movieDatabaseSlice.actions;

export const selectDatabaseMovieState = (state) => state.movieDatabase;
export const selectPage = (state) => selectDatabaseMovieState(state).page;
export const selectTotalPages = (state) => selectDatabaseMovieState(state).totalPages;
export const selectTotalResults = (state) => selectDatabaseMovieState(state).totalResults;
export const selectData = (state) => selectDatabaseMovieState(state).data;
export const selectGenres = (state) => selectDatabaseMovieState(state).genres;
export const selectStatus = (state) => selectDatabaseMovieState(state).status;

export default movieDatabaseSlice.reducer;
