import { Tile, Description, VotesWrapper, Details } from "./styled";
import { Image, PersonImage } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { ExtendedVotes } from "./Votes";
import { AdditionalInfo, PersonAdditionalInfo } from "./AdditionalInfo";
import { MainInfo } from "./MainInfo";
import { DetailsMainInfo } from "./MainInfo";

export const MovieTile = ({ posterPath, title, year, genres, voteAverage, voteCount }) => (
  <>
    <Tile>
      <Image
        posterPath={posterPath}
      />
      <Description>
        <MainInfo
          title={title}
          year={year}
        />
        <Genres
          genres={genres}
        />
        <Votes
          voteAverage={voteAverage}
          voteCount={voteCount}
        />
      </Description>
    </Tile>
  </>
);

export const MovieDescriptionTile = ({ posterPath, title, year, genres, voteAverage, voteCount, description, firstValue, secondValue }) => (
  <>
    <Tile
      description
    >
      <Image
        posterPath={posterPath}
      />
      <Description
        description
      >
        <DetailsMainInfo
          title={title}
          year={year}
        />
        <AdditionalInfo
          firstValue={firstValue}
          secondValue={secondValue}
        />
        <Genres
        //genres={genres}
        />
        <VotesWrapper>
          <ExtendedVotes
            voteAverage={voteAverage}
            voteCount={voteCount}
          />
        </VotesWrapper>
      </Description>
      <Details>
        {description}
      </Details>
    </Tile>
  </>
);

export const PersonDescriptionTile = () => (
  <>
    <Tile
      description
    >
      <PersonImage />
      <Description
        description
      >
        <DetailsMainInfo
          title={"Liu Yifei"}
        />
        <PersonAdditionalInfo
          firstValue={"25.08.1987"}
          secondValue={"Wuhan, Hubei, China"}
        />
      </Description>
      <Details>
        Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.
      </Details>
    </Tile>
  </>
);