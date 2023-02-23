import { Routes ,Route } from 'react-router-dom';
import { toMovieDetails, toMoviesList, toPeopleList, toPersonDetails } from "./routes";
import Header from "./common/Header";
import MoviesList from "./features/moviesList";

function App() {
  return (
    <>
      <Header />
      <Routes>        
          <Route path={toMoviesList()} element={<MoviesList />} />
          <Route path={toPeopleList()} element="{<PeopleList />}" />
          <Route path={toMovieDetails()} element="{<MovieDetails />}" />
          <Route path={toPersonDetails()} element="{<PersonDetails />}" />           
      </Routes>
    </>
  );
}

export default App;