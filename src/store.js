import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieListReducer from './features/movieListSlice';
import peopleListReducer from './features/peopleListSlice';
import movieDeailsReducer from './features/movieSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieData: movieListReducer,
        peopleData: peopleListReducer,
        movieDetails:movieDeailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;