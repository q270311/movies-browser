import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsForMovie, selectDetails, selectCast, selectCrew } from '../movieSlice';
import { MainWrapper } from "../../common/MainWrapper";
import poster from "./backdrop.jpg";
import { Backdrop, BackdropWrapper, PosterWrapper, Title, Wrapper } from "./styled";
import { BackdropVotes } from "../../common/Tiles/Votes";
import { MovieDescriptionTile } from "../../common/Tiles";
import PersonTile from "../../common/Tiles/PersonTile";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForMovie({ movieId: id }));
    }, [id, dispatch]);
    const details = useSelector(selectDetails);
    //const cast = useSelector(selectCast);
    //const crew = useSelector(selectCrew);

    return (
        <p>{details.original_title}</p>

        /* <MainWrapper
            backdrop={
                <BackdropWrapper>
                    <Title>
                        {details.original_title}
                    </Title>
                    <PosterWrapper>
                        <Backdrop
                            src={poster}
                        />
                    </PosterWrapper>
                    <BackdropVotes
                        voteAverage={"5"}
                        voteCount={"100"}
                    />
                </BackdropWrapper>
            } */
            /* content={
                <MovieDescriptionTile
                    //posterPath={posterPath}
                    title={"title"}
                    year={("year" || "").substring(0, 4)}
                    //genres={"genres"}
                    voteAverage={"5"}
                    voteCount={"100"}
                    description={"A young Chinese maiden disguises..."}
                    firstValue={"China USA"}
                    secondValue={"24.10.2022"}
                />
            }
            firstSubtitle={`Cast (${cast.length})`}
            firstSection={
                <Wrapper>
                    <PersonTile
                        name={"name"}
                        subtitle={"subtitle"}
                    />
                </Wrapper>
            }
            secondSubtitle={`Crew (${crew.length})`}
            secondSection={
                <Wrapper>
                    <PersonTile
                        name={"name"}
                        subtitle={"subtitle"}
                    />
                </Wrapper>
            } 
        />*/
    )
}

export default MovieDetails;