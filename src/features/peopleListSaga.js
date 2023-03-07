import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, goToPage, selectPage, selectQuery } from "./peopleListSlice";
import { getPersonPopular, searchPerson } from "../getDataFromMovieDB";

function* fetchPersonPopularHandler() {
    try {
        const page = yield select(selectPage);
        const query = yield select(selectQuery);
        let data;
        if (query !== '') {
            data = yield call(searchPerson, { page: page, query: query });
        } else {
            data = yield call(getPersonPopular, { page: page });
        }        
        yield put(fetchDataSuccess({data}));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchPersonPopular() {
    yield takeLatest(goToPage.type, fetchPersonPopularHandler);
}