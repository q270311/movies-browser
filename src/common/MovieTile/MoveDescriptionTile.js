import { Tile, Description, Title, Subtitle } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { AdditionalInfo } from "./AdditionalInfo";

export const MovieDescriptonTile = () => (
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
        <AdditionalInfo />
        <Genres />
          <Votes />
      </Description>
    </Tile>
  </>
);