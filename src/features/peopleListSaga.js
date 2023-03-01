import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataError, goToPage, selectPage } from "./peopleListSlice";
import { getPersonPopular } from "../getDataFromMovieDB";

function* fetchPersonPopularHandler() {
    try {
        const page = yield select(selectPage);
        const data = yield call(getPersonPopular, { page: page });
        yield put(fetchDataSuccess({data}));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchPersonPopular() {
    yield fetchPersonPopularHandler();
    yield takeLatest(goToPage.type, fetchPersonPopularHandler);
}