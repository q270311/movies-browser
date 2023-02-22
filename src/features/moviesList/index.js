import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
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
            <Wrapper>
                {popularMovies.map(movie => (
                    <MovieTile
                        key={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        year={movie.release_date.substring(0, 4)}
                        genres={movie.genre_ids}
                        voteAverage={movie.vote_average}
                        voteCount={movie.vote_count}
                    />
                ))}
            </Wrapper>
            <Pagination />
        </>

    );
};

export default MoviesList;