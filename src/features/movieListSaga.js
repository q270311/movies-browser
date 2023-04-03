import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, goToPage, selectPage, selectQuery } from "./movieListSlice";
import { getGenres, getMoviePopular, searchMovie } from "./getDataFromMovieDB";

function* fetchMoviePopularHandler() {
    try {
        const genres = yield call(getGenres);
        const page = yield select(selectPage);
        const query = yield select(selectQuery);
        let data;
        if (query !== '') {
            data = yield call(searchMovie, { page: page, query: query });
        } else {
            data = yield call(getMoviePopular, { page: page });
        }
        yield put(fetchDataSuccess({ data, genres }));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchMoviePopular() {
    yield takeLatest(goToPage.type, fetchMoviePopularHandler);
}