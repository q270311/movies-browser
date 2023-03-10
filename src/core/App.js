import { Routes, Route, Navigate } from 'react-router-dom';
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";
import MoviesList from "../features/moviesList";
import PeopleList from "../features/peopleList";
import MovieDetails from '../features/movieDetails';
import PersonDetails from '../features/personDetails';
import { Error } from '../common/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path={toMoviesList()} element={<MoviesList />} />
        <Route path={toPeopleList()} element={<PeopleList />} />
        <Route path={toMovieDetails()} element={<MovieDetails />} />
        <Route path={toPersonDetails()} element={<PersonDetails />} />
        <Route path="/" element={<Navigate to={toMoviesList()} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;