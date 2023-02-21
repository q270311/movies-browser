import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, goToPage, selectPage } from "./movieDatabaseSlice";
import { getMoviePopular } from "../getDataFromMovieDB";

function* fetchMoviePopularHandler() {
    try {
        const page = yield select(selectPage);
        const data = yield call(getMoviePopular, { page: page });
        yield put(fetchDataSuccess(data));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchMoviePopular() {
    yield fetchMoviePopularHandler();
    yield takeLatest(goToPage.type, fetchMoviePopularHandler);
}