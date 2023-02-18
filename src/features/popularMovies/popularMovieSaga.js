import { call, put } from "redux-saga/effects";
import { fetchPopularMovieSuccess, fetchPopularMovieError } from "./popularMovieSlice";
import { getMoviePopular } from "../../getDataFromMovieDB";

function* fetchMoviePopularHandler() {
    try {
        const movies = yield call(getMoviePopular);
        yield put(fetchPopularMovieSuccess(movies.results));
    } catch (error) {
        yield put(fetchPopularMovieError());
    }
}

export function* watchFetchMoviePopular() {
    yield fetchMoviePopularHandler();
}