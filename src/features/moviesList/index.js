import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/Tiles"
import { selectData, selectStatus } from '../movieDatabaseSlice';
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainWrapper } from "../../common/MainWrapper";

const MoviesList = () => {
    const popularMovies = useSelector(selectData);
    const status = useSelector(selectStatus);

    return (
        status === "loading" ?
            <Loader /> :
            status === "error" ?
                <Error /> :
                <>
                    <MainWrapper
                        content={
                            <Wrapper>
                                {popularMovies.map(movie => (
                                    <MovieTile
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                        title={movie.title}
                                        year={(movie.release_date || "").substring(0, 4)}
                                        genres={movie.genre_ids}
                                        voteAverage={movie.vote_average}
                                        voteCount={movie.vote_count}
                                    />
                                ))}
                            </Wrapper>
                        }
                        title={"Popular movies"}
                    />
                    <Pagination />
                </>
    );
};

export default MoviesList;