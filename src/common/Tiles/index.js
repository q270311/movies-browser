import { Tile, Description, VotesWrapper, Details } from "./styled";
import { Image, PersonImage } from "./Image";
import { Genres } from "./Genres";
import { Votes } from "./Votes";
import { ExtendedVotes } from "./Votes";
import { AdditionalInfo, PersonAdditionalInfo } from "./AdditionalInfo";
import { MainInfo } from "./MainInfo";
import { DetailsMainInfo } from "./MainInfo";

export const MovieTile = ({ posterPath, posterSize, title, year, genres, voteAverage, voteCount }) => (
  <>
    <Tile>
      <Image
        posterPath={posterPath}
        posterSize={posterSize}
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

export const MovieDescriptionTile = ({ posterPath, posterSize, title, year, genres, voteAverage, voteCount, description, firstValue, secondValue }) => (
  <>
    <Tile
      description
    >
      <Image
        posterPath={posterPath}
        posterSize={posterSize}
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
          genres={genres}
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

export const PersonDescriptionTile = ({ title, firstValue, secondValue, description, profilePath, profileSize }) => {
  
  return (
    <>
      <Tile
        description
      >
        <PersonImage
          posterPath={profilePath}
          posterSize={profileSize}
        />
        <Description
          description
        >
          <DetailsMainInfo
            title={title}
          />
          <PersonAdditionalInfo
            firstValue={firstValue}
            secondValue={secondValue}
          />
        </Description>
        <Details>
          {description}
        </Details>
      </Tile>
    </>
  );
}