import { all } from "redux-saga/effects";
import { watchFetchMoviePopular } from './features/movieDatabaseSaga';

export default function* rootSaga() {
    yield all([
        watchFetchMoviePopular(),
    ]);
}