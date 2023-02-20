import { PersonTileContainer, PersonImage, PersonHeading } from "./styled";
import { PersonLink } from "../common/Header/styled.js";

const PersonTile = () => {
  return (
    <PersonTileContainer>
      <PersonLink to="/">
        <PersonImage />
        <PersonHeading></PersonHeading>
      </PersonLink>
    </PersonTileContainer>
  );
};

export default PersonTile;
