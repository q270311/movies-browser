import { MainWrapper } from "../../common/MainWrapper"
import poster from "./backdrop.jpg";
import { Backdrop, BackdropWrapper, PosterWrapper, Title } from "./styled";
import { BackdropVotes } from "../../common/Tiles/Votes";

export const MoviePage = () => (
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
    } />
);