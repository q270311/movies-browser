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
        firstSubtitle={"Movies - cast (4)"}
        firstSection={
          <Wrapper>
            <MovieTile />
          </Wrapper>
        }
        secondSubtitle={"Movies - crew (4)"}
        secondSection={
          <Wrapper>
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
          </Wrapper>
        }
      />
    </>
  );
};