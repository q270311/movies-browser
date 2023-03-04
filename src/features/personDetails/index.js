import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { selectStatus, selectDetails, selectCast, selectCrew, getDetailsForPerson } from '../personSlice';
import { MainWrapper } from "../../common/MainWrapper"
import { MovieTile, PersonDescriptionTile } from "../../common/Tiles"
import { Wrapper } from "../moviesList/styled";

export const PersonDetails = () => {
    const secureBaseUrl = "https://image.tmdb.org/t/p/h632";
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);
    const status = useSelector(selectStatus);
    const details = useSelector(selectDetails);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const castNumber = (cast.filter(({ title }) => title)).length;
    const crewtNumber = (crew.filter(({ title }) => title)).length;

    return (
        status === "loading" ?
            <Loader /> :
            status === "error" ?
                <Error /> :
                <MainWrapper
                    content={
                        <PersonDescriptionTile
                            title={"person.name"}
                            firstValue={"person.birthday"}
                            secondValue={"person.place_of_birth"}
                            description={"person.biography"}
                        //  profilePath={"posterPath"}
                        />
                    }
                    firstSubtitle={"Movies - cast (length)"}
                    firstSection={
                        <Wrapper>
                            <MovieTile
                                //  posterPath={"posterPath"}
                                title={"title"}
                                year={"character (year)"}
                                //  genres={"genres"}
                                voteAverage={"voteAverage"}
                                voteCount={"voteCount"}

                            />
                        </Wrapper>
                    }
                    secondSubtitle={"Movies - crew (length)"}
                    secondSection={
                        <Wrapper>
                            <MovieTile
                                //  posterPath={"posterPath"}
                                title={"title"}
                                year={"job (year)"}
                                //  genres={"genres"}
                                voteAverage={"voteAverage"}
                                voteCount={"voteCount"}

                            />
                        </Wrapper>
                    }
                />
                    // <b>{details.name}</b>
                    // <img src={`${secureBaseUrl}${details.profile_path}`} alt="" />
                    // <p>Date of birth:{details.birthday}</p>
                    // <p>Place of birth: {details.place_of_birth}</p>
                    // <p>{details.biography}</p>
                    // <b>Movies - cast ({castNumber})</b>
                    // {
                    //     cast.map(film => <p>{film.title}</p>)
                    // }
                    // <b>Movies - crew ({crewtNumber})</b>
                    // {
                    //     crew.map(film => <p>{film.title}</p>)
                    // } 
                

    );
}

export default PersonDetails;
