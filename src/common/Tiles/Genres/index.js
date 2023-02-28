import { Wrapper, Genre } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectGenres } from '../../../features/movieDatabaseSlice';


export const Genres = ({ genres }) => {
  const genresDictionary = useSelector(selectGenres);
  return (
    <Wrapper>
      {genres.map(genre => {
        const words = genresDictionary.filter(word => word.id === genre);
        return (
          <Genre key={nanoid()}>
            {words[0].name}
          </Genre>
        )
      }
      )}
    </Wrapper>
  )
};