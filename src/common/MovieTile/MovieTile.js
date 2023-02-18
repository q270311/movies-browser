import { Tile, Description, Title, Subtitle } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";

export const MovieTile = () => (
  <>
    <Tile>
      <Image />
      <Description>
        <Title>
          Mulan
        </Title>
        <Subtitle>
          2020
        </Subtitle>
        <Genres />
        <Votes />
      </Description>
    </Tile>
  </>
);