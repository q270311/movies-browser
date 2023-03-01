import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, getDetailsForMovie, selectMovieId} from "./movieSlice";
export const getMovieCredits = async ({ movieID }) => {
import { getMovieDetails, getMovieCredits } from "../getDataFromMovieDB";

function* fetchMovieDetailsHandler() {
    try {        
        const movieId = yield select(selectMovieId);
        const details = yield call(getMovieDetails, { page: movieId });
        const credits = yield call(getMovieCredits, { page: movieId });
        yield put(fetchDataSuccess({details, credits}));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchMovieDetails() {
    yield takeLatest(getDetailsForMovie.type, fetchMovieDetailsHandler);
}