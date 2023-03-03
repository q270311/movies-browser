import { all } from "redux-saga/effects";
import { watchFetchMoviePopular } from './features/movieListSaga';
import { watchFetchPersonPopular } from './features/peopleListSaga';
import { watchFetchMovieDetails } from './features/movieSaga';
import { watchFetchPersonDetails } from './features/personSaga';

export default function* rootSaga() {
    yield all([
        watchFetchMoviePopular(),
        watchFetchPersonPopular(),
        watchFetchMovieDetails(),
        watchFetchPersonDetails(),
    ]);
}