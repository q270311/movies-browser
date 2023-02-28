import { all } from "redux-saga/effects";
import { watchFetchMoviePopular } from './features/movieListSaga';

export default function* rootSaga() {
    yield all([
        watchFetchMoviePopular(),
    ]);
}