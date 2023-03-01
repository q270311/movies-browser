import { MainWrapper } from "../../common/MainWrapper"
import poster from "./backdrop.jpg";
import { Backdrop, BackdropWrapper, PosterWrapper, Title, Wrapper } from "./styled";
import { BackdropVotes } from "../../common/Tiles/Votes";
import { MovieDescriptionTile } from "../../common/Tiles";
import PersonTile from "../../common/Tiles/PersonTile";

export const MoviePage = () => {

  return (
    <MainWrapper
      backdrop={
        <BackdropWrapper>
          <Title>
            Plane
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
      }
      content={
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
      firstSubtitle={"Cast"}
      firstSection={
        <Wrapper>
          <PersonTile
            name={"name"}
            subtitle={"subtitle"}
          />
        </Wrapper>
      }
      secondSubtitle={"Crew"}
      secondSection={
        <Wrapper>
          <PersonTile
            name={"name"}
            subtitle={"subtitle"}
          />
        </Wrapper>
      }
    />
  )
};