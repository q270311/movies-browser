import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, getDetailsForMovie, selectMovieId } from "./movieSlice";
import { getMovieDetails, getMovieCredits } from "../getDataFromMovieDB";

function* fetchMovieDetailsHandler() {
    try {
        const Id = yield select(selectMovieId);
        const details = yield call(getMovieDetails, { movieID: Id });
        const credits = yield call(getMovieCredits, { movieID: Id });
        yield put(fetchDataSuccess({ details, credits }));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchMovieDetails() {
    yield takeLatest(getDetailsForMovie.type, fetchMovieDetailsHandler);
}