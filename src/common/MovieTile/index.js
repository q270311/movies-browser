import { Tile, Description, VotesWrapper, Details } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { ExtendedVotes } from "./Votes";
import { AdditionalInfo } from "./AdditionalInfo";
import { MainInfo } from "./MainInfo";
import { DetailsMainInfo } from "./MainInfo";

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

export const MovieDescriptonTile = () => (
  <>
    <Tile description>
      <Image />
      <Description description>
        <DetailsMainInfo />
        <AdditionalInfo />
        <Genres />
        <VotesWrapper>
          <ExtendedVotes />
        </VotesWrapper>
      </Description>
      <Details>
        A young Chinese maiden disguises herself as a male warrior in order to save her father.
        Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
      </Details>
    </Tile>
  </>
);