import { Poster, ImageWrapper } from "./styled";
import noPoster from "./noPoster.svg";
import noPerson from "./noPerson.svg";

export const Image = ({ posterPath }) => {
  const secureBaseUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <ImageWrapper>
      <Poster
        alt="movie poster"
        src={
          posterPath ?
            `${secureBaseUrl}${posterPath}` :
            `${noPoster}`
        }
      />
    </ImageWrapper>
  )
};

export const PersonImage = ({ posterPath, posterSize }) => {
  const secureBaseUrl = "https://image.tmdb.org/t/p";
  
  return (
    <ImageWrapper>
      <Poster
        alt="person poster"
        src={
          posterPath ?
            `${secureBaseUrl}${posterSize}${posterPath}` :
            `${noPerson}`
        }
      />
    </ImageWrapper>
  )
};