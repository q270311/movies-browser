import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { selectStatus, selectDetails, selectCast, selectCrew, getDetailsForPerson } from '../personSlice';

const PersonDetails = () => {
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
                <>
                    <b>{details.name}</b>
                    <img src={`${secureBaseUrl}${details.profile_path}`} alt="" />
                    <p>Date of birth:{details.birthday}</p>
                    <p>Place of birth: {details.place_of_birth}</p>
                    <p>{details.biography}</p>
                    <b>Movies - cast ({castNumber})</b>
                    {
                        cast.map(film => <p>{film.title}</p>)
                    }
                    <b>Movies - crew ({crewtNumber})</b>
                    {
                        crew.map(film => <p>{film.title}</p>)
                    }
                </>

    )
}

export default PersonDetails;