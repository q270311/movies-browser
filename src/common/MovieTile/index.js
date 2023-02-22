import { Tile, Description, VotesWrapper, Details } from "./styled";
import { Image } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { ExtendedVotes } from "./Votes";
import { AdditionalInfo } from "./AdditionalInfo";
import { MainInfo } from "./MainInfo";
import { DetailsMainInfo } from "./MainInfo";

export const MovieTile = ({ title, year, genres }) => (
  <>
    <Tile>
      <Image />
      <Description>
        <MainInfo title={title} year={year} />
        <Genres genres={genres} />
        <Votes />
      </Description>
    </Tile>
  </>
);

export const MovieDescriptionTile = () => (
  <>
    <Tile
      description
    >
      <Image />
      <Description
        description
      >
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