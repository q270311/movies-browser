import { Tile, Description, VotesWrapper, Details } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { ExtendedVotes } from "./Votes";
import { AdditionalInfo } from "./AdditionalInfo";
import { DetailsMainInfo } from "./MainInfo";

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