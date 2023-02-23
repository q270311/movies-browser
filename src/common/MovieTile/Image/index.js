import { Poster, ImageWrapper } from "./styled";
import noPoster from "./noPoster.svg";

export const Image = ({ posterPath }) => {
  const secureBaseUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <ImageWrapper>
      <Poster
        alt="movie poster"
        src={`${secureBaseUrl}${posterPath}`}
      />
    </ImageWrapper>
  )
}
