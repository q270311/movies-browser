import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { Wrapper } from "./styled";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/Tiles";
import { selectMovies, selectGenres, selectStatus, selectPage, selectTotalPages,selectTotalResults, setQuery, goToPage } from '../movieListSlice';
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainWrapper } from "../../common/MainWrapper";
import { StyledLink } from './styled';

const getGenresNames = ({ ids, dictionary }) =>
    ids.map(ids =>
        dictionary.filter(word => word.id === ids)[0].name
    )


const MoviesList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const genresDictionary = useSelector(selectGenres);
    const popularMovies = useSelector(selectMovies);
    const status = useSelector(selectStatus);
    const pageNumber = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResults);
    const dispatch = useDispatch();

    useEffect(() => {
        query ? dispatch(setQuery({ query: query })) : dispatch(setQuery({ query: "" }));
        dispatch(goToPage({ page: 1 }));
    }, [query, dispatch]);

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
                                        key={nanoid()}
                                    >
                                        <MovieTile
                                            key={nanoid()}
                                            posterPath={movie.poster_path}
                                            title={movie.title}
                                            year={(movie.release_date || "").substring(0, 4)}
                                            genres={getGenresNames({ ids: movie.genre_ids, dictionary: genresDictionary })}
                                            voteAverage={movie.vote_average}
                                            voteCount={movie.vote_count}
                                        />
                                    </StyledLink>
                                ))}
                            </Wrapper>
                        }
                        title={
                            query ? `Search results for "${query}" (${totalResults})` :
                            `Popular movies`
                        }
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