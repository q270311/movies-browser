import { Tile, Description, Votes } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { MainInfo } from "./MainInfo";

export const MovieTile = () => (
  <>
    <Tile>
      <Image />
      <Description>
        <MainInfo />
        <Genres />
        <Votes />
      </Description>
    </Tile>
  </>
);