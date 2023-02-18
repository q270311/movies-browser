import { Tile, Description } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { MainInfo } from "./MainInfo";
import { Votes } from "./Votes";

export const MovieTile = () => (
  <>
    <Tile>
      <Image />
      <Description>
        <MainInfo />
        <AdditionalInfo />
        <Genres />
        <Votes />
      </Description>
    </Tile>
  </>
);