import { useSelector } from "react-redux";
import { selectPopularMovie, selectStatus } from './popularMovieSlice';

const PopularMovie = () => {
    const movies = useSelector(selectPopularMovie);
    const status = useSelector(selectStatus);

    if (status!=="success") {
        return (
                <p>{status}</p>
        );
    }
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id} >
                    {movie.title}
                </li>
            ))}
        </ul>
    );
};

export default PopularMovie;