import { all } from "redux-saga/effects";
import { watchFetchMoviePopular } from './features/popularMovies/popularMovieSaga';

export default function* rootSaga() {
    yield all([
        watchFetchMoviePopular(),
    ]);
}