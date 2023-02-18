import { Routes, Route } from "react-router";
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";
import Header from "./common/Header";
import PopularMovie from "./features/popularMovies";

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
      <p>Test reading data from API</p>
      <p>Popular films, page 1:</p>
      <PopularMovie />
    </div>
  );
}

export default App;