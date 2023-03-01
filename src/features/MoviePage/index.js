import { MainWrapper } from "../../common/MainWrapper"
import poster from "./backdrop.jpg";
import { Backdrop, BackdropWrapper, PosterWrapper } from "./styled";
import { BackdropVotes } from "../../common/Tiles/Votes";

export const MoviePage = () => (
  <MainWrapper
    backdrop={
      <BackdropWrapper>
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