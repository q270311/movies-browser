import { PersonTileContainer, PersonImage, PersonHeading, PersonLink } from "./styled";
import noPerson from "../Image/noPerson.svg"

const PersonTile = ({ name, posterPath }) => {
  const secureBaseUrl = "https://image.tmdb.org/t/p/w185";

  return (
    <PersonTileContainer>
      <PersonLink to="/">
        <PersonImage
          src={
            posterPath ?
              `${secureBaseUrl}${posterPath}` :
              `${noPerson}`
          }
          alt="poster" />
        <PersonHeading>{name}</PersonHeading>
      </PersonLink>
    </PersonTileContainer>
  );
};

export default PersonTile;
