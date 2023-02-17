import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import popularMovieReducer from './features/popularMovies/popularMovieSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        popularMovie: popularMovieReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;