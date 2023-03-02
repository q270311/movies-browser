import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/Tiles"
import { selectMovies, selectStatus, selectPage, selectTotalPages, goToPage } from '../movieListSlice';
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainWrapper } from "../../common/MainWrapper";
import {StyledLink} from './styled';

const MoviesList = () => {
    const popularMovies = useSelector(selectMovies);
    const status = useSelector(selectStatus);
    const pageNumber = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const dispatch = useDispatch();

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
                                    <StyledLink 
                                        to={`/movie/${movie.id}`}
                                        key={movie.id}
                                    >
                                        <MovieTile
                                            key={movie.id}
                                            posterPath={movie.poster_path}
                                            title={movie.title}
                                            year={(movie.release_date || "").substring(0, 4)}
                                            genres={movie.genre_ids}
                                            voteAverage={movie.vote_average}
                                            voteCount={movie.vote_count}
                                        />
                                    </StyledLink>
                                ))}
                            </Wrapper>
                        }
                        title={"Popular movies"}
                    />
                    <Pagination
                        pageNumber={pageNumber}
                        totalPages={totalPages}
                        goToFirstPage={() => dispatch(goToPage({ page: 1 }))}
                        goToNextPage={() => dispatch(goToPage({ page: pageNumber + 1 }))}
                        goToPreviousPage={() => dispatch(goToPage({ page: pageNumber - 1 }))}
                        goToLastPage={() => dispatch(goToPage({ page: totalPages }))}
                    />
                </>
    );
};

export default MoviesList;