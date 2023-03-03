import { MainWrapper } from "../../common/MainWrapper"
import { PersonDescriptionTile } from "../../common/Tiles"

export const PersonDetails = () => {

  return (
    <>
      <MainWrapper
        content={
          <PersonDescriptionTile />
        } />
    </>
  );
};