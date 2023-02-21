import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieDatabaseReducer from './features/movieDatabaseSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieDatabase: movieDatabaseReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;