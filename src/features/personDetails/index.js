import { MainWrapper } from "../../common/MainWrapper"
import { MovieTile, PersonDescriptionTile } from "../../common/Tiles"
import { Wrapper } from "../moviesList/styled";

export const PersonDetails = () => {

  return (
    <>
      <MainWrapper
        content={
          <PersonDescriptionTile
            title={"person.name"}
            firstValue={"person.birthday"}
            secondValue={"person.place_of_birth"}
            description={"person.biography"}
          //  profilePath={"posterPath"}
          />
        }
        firstSubtitle={"Movies - cast (length)"}
        firstSection={
          <Wrapper>
            <MovieTile
            //  posterPath={"posterPath"}
              title={"title"}
              year={"character (year)"}
            //  genres={"genres"}
              voteAverage={"voteAverage"}
              voteCount={"voteCount"}

            />
          </Wrapper>
        }
        secondSubtitle={"Movies - crew (length)"}
        secondSection={
          <Wrapper>
            <MovieTile
            //  posterPath={"posterPath"}
              title={"title"}
              year={"job (year)"}
            //  genres={"genres"}
              voteAverage={"voteAverage"}
              voteCount={"voteCount"}

            />
          </Wrapper>
        }
      />
    </>
  );
};