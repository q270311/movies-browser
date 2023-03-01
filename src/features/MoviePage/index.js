import { MainWrapper } from "../../common/MainWrapper"
import poster from "./backdrop.jpg";
import { Backdrop, BackdropWrapper, PosterWrapper } from "./styled";

export const MoviePage = () => (
  <MainWrapper
    backdrop={
      <BackdropWrapper>
        <PosterWrapper>
          <Backdrop
            src={poster}
          />
        </PosterWrapper>
      </BackdropWrapper>
    } />
)