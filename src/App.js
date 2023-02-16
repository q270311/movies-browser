import { Routes, Route } from "react-router";
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";

function App() {
  return (
    <div>
      <Routes>
        <Route path={toMovieDetails()} element="{<MovieDetails />}" />
        <Route path={toPersonDetails()} element="{<PersonDetails />}" />
        <Route path={toMoviesList()} element="{<MoviesList />}" />
        <Route path={toPeopleList()} element="{<PeopleList />}" />
      </Routes>
      <p>Movies Browser</p>
      <p>site under construction</p>
    </div>
  );
}

export default App;