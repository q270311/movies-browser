import { Routes, Route } from 'react-router-dom';
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";
import MoviesList from "./features/moviesList";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies-browser" element={<MoviesList />} />       
          <Route path={toMoviesList()} element={<MoviesList />} />
          <Route path={toPeopleList()} element="{<PeopleList />}" />
          <Route path={toMovieDetails()} element="{<MovieDetails />}" />
          <Route path={toPersonDetails()} element="{<PersonDetails />}" />                   
      </Routes>
    </>
  );
}

export default App;