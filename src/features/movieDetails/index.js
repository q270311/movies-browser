import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsForMovie, selectDetails, selectCast, selectCrew, selectStatus } from '../movieSlice';
import { MainWrapper } from "../../common/MainWrapper";
import { Backdrop, BackdropWrapper, PosterWrapper, Title, Wrapper } from "./styled";
import { BackdropVotes } from "../../common/Tiles/Votes";
import { MovieDescriptionTile } from "../../common/Tiles";
import PersonTile from "../../common/Tiles/PersonTile";
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { nanoid } from "@reduxjs/toolkit";

const MovieDetails = () => {
    const secureBaseUrl = "https://image.tmdb.org/t/p/original";
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForMovie({ movieId: id }));
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
                    backdrop={!!details.backdrop_path && (
                        <BackdropWrapper>
                            <Title>
                                {details.original_title}
                            </Title>
                            <PosterWrapper>
                                <Backdrop
                                    src={`${secureBaseUrl}${details.backdrop_path}`}
                                    alt="backdrop"
                                />
                            </PosterWrapper>
                            {details.vote_count && (
                            <BackdropVotes
                                voteAverage={details.vote_average}
                                voteCount={details.vote_count}
                            />)}
                        </BackdropWrapper>
                    )
                    }
                    content={
                        <MovieDescriptionTile
                            posterPath={details.poster_path}
                            title={details.original_title}
                            year={(details.release_date || "").substring(0, 4)}
                            genres={
                                (details.genres).map(genre => genre.name)
                            }
                            voteAverage={details.vote_average}
                            voteCount={details.vote_count}
                            description={details.overview}
                            firstValue={(details.production_countries).map(country => `${country.name}, `)}
                            secondValue={details.release_date}
                        />
                    }
                    firstSubtitle={ cast.length === 0 ? "" : `Cast (${cast.length})`}
                    firstSection={
                        cast.length === 0 ? "" :
                        <Wrapper>
                            {cast.map(person => (
                                <PersonTile
                                    key={nanoid()}
                                    id={person.id}
                                    name={person.name}
                                    subtitle={person.character}
                                    posterPath={person.profile_path}
                                />
                            ))}
                        </Wrapper>
                    }
                    secondSubtitle={ crew.length === 0 ? "" : `Crew (${crew.length})`}
                    secondSection={
                        crew.length === 0 ? "" :
                        <Wrapper>
                            {crew.map(person => (
                                <PersonTile
                                    key={nanoid()}
                                    id={person.id}
                                    name={person.name}
                                    subtitle={person.job}
                                    posterPath={person.profile_path}
                                />
                            ))}
                        </Wrapper>
                    }
                />
    )
}

export default MovieDetails;