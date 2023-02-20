import { Routes, Route } from "react-router";
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";
import Header from "./common/Header";
import MoviesList from "./features/moviesList";

function App() {
  return (
    <div>
      <Routes>
        <Route path={toMovieDetails()} element="{<MovieDetails />}" />
        <Route path={toPersonDetails()} element="{<PersonDetails />}" />
        <Route path={toMoviesList()} element="{<MoviesList />}" />
        <Route path={toPeopleList()} element="{<PeopleList />}" />
      </Routes>
      <Header/>
      <MoviesList />
    </div>
  );
}

export default App;