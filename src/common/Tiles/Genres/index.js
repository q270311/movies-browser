import { Wrapper, Genre } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

export const Genres = ({ genres }) => {
  return (
    <Wrapper>
      {genres.map(genre => (
          <Genre key={nanoid()}>
            {genre}
          </Genre>
        ))}
    </Wrapper>
  )
};