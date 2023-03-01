import { all } from "redux-saga/effects";
import { watchFetchMoviePopular } from './features/movieListSaga';
import { watchFetchPersonPopular } from './features/peopleListSaga';

export default function* rootSaga() {
    yield all([
        watchFetchMoviePopular(),
        watchFetchPersonPopular(),
    ]);
}