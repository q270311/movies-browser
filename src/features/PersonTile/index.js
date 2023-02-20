import { PersonTileContainer, PersonImage, PersonHeading } from "./styled";
import { NavigationLink } from "../common/Header/styled.js";

const PersonTile = () => {
  return (
    <PersonTileContainer>
      <NavigationLink to="/">
        <PersonImage />
        <PersonHeading></PersonHeading>
      </NavigationLink>
    </PersonTileContainer>
  );
};

export default PersonTile;
