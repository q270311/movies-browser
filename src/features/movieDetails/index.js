import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsForMovie, selectDetails, selectCast, selectCrew } from '../movieSlice';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForMovie({ movieId: id }));
    }, [id, dispatch]);
    const details = useSelector(selectDetails);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);

    return (
        <>
            <p>details movie id: {id}</p>
            <p>title: {details.original_title}</p>
            <p>cast: {cast.length}</p>
            <p>crew: {crew.length}</p>
        </>
    )
}

export default MovieDetails;