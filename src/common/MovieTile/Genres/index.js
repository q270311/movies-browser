import { Wrapper, Genre } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectGenres } from '../../../features/movieDatabaseSlice';


export const Genres = ({ genres }) => {
  const genresDictionary = useSelector(selectGenres);

  return (
    <Wrapper>
      {genres.map(genre => {
        return(
          <Genre key={nanoid()}>
            {genresDictionary.filter(({id}) => genre)[0].name} 
          </Genre>
        )
      }
      )}
    </Wrapper>
  )
}

  ;