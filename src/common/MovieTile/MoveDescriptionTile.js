import { Tile, Description, Title, Subtitle, VotesWrapper, Details } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { AdditionalInfo } from "./AdditionalInfo";

export const MovieDescriptonTile = () => (
  <>
    <Tile description>
      <Image />
      <Description description>
        <Title description>
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