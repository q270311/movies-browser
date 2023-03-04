import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchDataSuccess, selectPersonId, fetchDataError, getDetailsForPerson } from "./personSlice";
import { getPersonDetails, getPersonMovieCredits } from "../getDataFromMovieDB";

function* fetchPersonDetailsHandler() {
    try {
        const Id = yield select(selectPersonId);
        const details = yield call(getPersonDetails, { personID: Id });
        const credits = yield call(getPersonMovieCredits, { personID: Id });
        yield put(fetchDataSuccess({ details, credits }));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* watchFetchPersonDetails() {
    yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}