import { Tile, Description, Title, Year, Votes, Vote, Star } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";

export const MovieTile = () => (
  <>
    <Tile>
        <Image />
      <Description>
        <Title>
          Mulan
        </Title>
        <Year>
          2020
        </Year>
        <Genres />
        <Votes />
      </Description>
    </Tile>
  </>
);