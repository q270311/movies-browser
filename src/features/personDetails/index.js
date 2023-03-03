import { MainWrapper } from "../../common/MainWrapper"
import { MovieTile, PersonDescriptionTile } from "../../common/Tiles"
import { Wrapper } from "../moviesList/styled";

export const PersonDetails = () => {

  return (
    <>
      <MainWrapper
        content={
          <PersonDescriptionTile />
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