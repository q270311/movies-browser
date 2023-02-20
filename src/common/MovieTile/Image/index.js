import { Poster, ImageWrapper } from "./styled";
import poster from "./poster.png";

export const Image = () => (
  <ImageWrapper>
    <Poster
      alt="moviePoster"
      src={poster}
    />
  </ImageWrapper>
);