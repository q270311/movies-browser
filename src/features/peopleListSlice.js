import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleData",
    initialState: {
        page: 1,
        totalPages: 0,
        totalResults: 0,
        people: [],        
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, {payload}) => {
            state.status="loading";
            state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
            state.totalResults = payload.data.total_results;
            state.people = payload.data.results;
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
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleData;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectTotalPages = (state) => selectPeopleListState(state).totalPages;
export const selectTotalResults = (state) => selectPeopleListState(state).totalResults;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectStatus = (state) => selectPeopleListState(state).status;

export default peopleListSlice.reducer;
