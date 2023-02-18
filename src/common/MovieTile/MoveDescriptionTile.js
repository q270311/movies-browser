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
        <Subtitle description>
          2020
        </Subtitle>
        <AdditionalInfo />
        <Genres />
        <VotesWrapper>
          <Votes />
        </VotesWrapper>
      </Description>
      <Details>
        A young Chinese maiden disguises herself as a male warrior in order to save her father.
        Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
      </Details>
    </Tile>
  </>
);