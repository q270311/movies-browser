import { useSelector } from "react-redux";
import { Pagination } from "../../common/Pagination";
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
            <ul>
                {popularMovies.map(movie => (
                    <li key={movie.id} >
                        {movie.title}
                    </li>
                ))}
            </ul>
            <Pagination />
        </>
    );
};

export default MoviesList;