import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { selectGenres, selectStatus, selectDetails, selectCast, selectCrew, getDetailsForPerson } from '../personSlice';
import { MainWrapper } from "../../common/MainWrapper"
import { MovieTile, PersonDescriptionTile } from "../../common/Tiles";
import { Wrapper } from "../moviesList/styled";
import { StyledLink } from './styled';

export const getGenresNames = ({ ids, dictionary }) =>
    ids.map(ids =>
        dictionary.filter(word => word.id === ids)[0].name
    );

export const PersonDetails = () => {
    const genresDictionary = useSelector(selectGenres);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);
    const status = useSelector(selectStatus);
    const details = useSelector(selectDetails);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);

    return (
        status === "loading" ?
            <Loader /> :
            status === "error" ?
                <Error /> :
                <MainWrapper
                    content={
                        <PersonDescriptionTile
                            title={details.name}
                            firstValue={details.birthday}
                            secondValue={details.place_of_birth}
                            description={details.biography}
                            profileSize={"/h632"}
                            profilePath={details.profile_path}
                        />
                    }
                    firstSubtitle={cast.length === 0 ? "" : `Movies - cast (${cast.length})`}
                    firstSection={
                        cast.length === 0 ? "" :
                        <Wrapper>
                            {
                                cast.map(film =>
                                    <StyledLink
                                        to={`/movie/${film.id}`}
                                        key={nanoid()}
                                    >
                                        <MovieTile
                                            key={nanoid()}
                                            posterPath={film.poster_path}
                                            title={film.title}
                                            year={(film.release_date || "").substring(0, 4)}
                                            genres={getGenresNames({ ids: film.genre_ids, dictionary: genresDictionary })}
                                            voteAverage={film.vote_average}
                                            voteCount={film.vote_count}
                                        />
                                    </StyledLink>
                                )
                            }
                        </Wrapper>
                    }
                    secondSubtitle={ crew.length === 0 ? "" : `Movies - crew (${crew.length})`}
                    secondSection={
                        crew.length === 0 ? "" :
                        <Wrapper>
                            {
                                crew.map(film =>
                                    <StyledLink
                                        to={`/movie/${film.id}`}
                                        key={nanoid()}
                                    >
                                        <MovieTile
                                            key={nanoid()}
                                            posterPath={film.poster_path}
                                            title={film.title}
                                            year={(film.release_date || "").substring(0, 4)}
                                            genres={getGenresNames({ ids: film.genre_ids, dictionary: genresDictionary })}
                                            voteAverage={film.vote_average}
                                            voteCount={film.vote_count}
                                        />
                                    </StyledLink>
                                )
                            }
                        </Wrapper>
                    }
                />
    );
}

export default PersonDetails;
