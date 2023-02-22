import { useSelector } from "react-redux";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/MovieTile"
import { selectData, selectStatus } from '../movieDatabaseSlice';

const MoviesList = () => {
    const popularMovies = useSelector(selectData);
    const status = useSelector(selectStatus);

    if (status !== "success") {
        return (
            <p>{status}</p>
        );
    }
    return (
        <>
            {popularMovies.map(movie => (
                <MovieTile
                    key={movie.id}
                    title={movie.title}
                    year={movie.release_date.substring(0, 4)}
                    genres={movie.genre_ids}
                />
            ))}
            <Pagination />
        </>
    );
};

export default MoviesList;