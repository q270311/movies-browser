import { PersonTileContainer, PersonImage, PersonHeading, PersonLink } from "./styled";

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
