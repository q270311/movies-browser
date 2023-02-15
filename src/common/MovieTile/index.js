import { Tile, Image, Description, Title, Year, Genres, Genre, Votes, Vote } from "./styled";
import poster from "./poster.png"

export const MovieTile = () => (
  <>
    <Tile>
      <Image alt="moviePoster" src={poster} />
      <Description>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Genres>
          <Genre>Action</Genre>
          <Genre>Adventure</Genre>
          <Genre>Drama</Genre>
        </Genres>
        <Votes>
          <Vote star><img className="star" src="./star.svg" alt="" /></Vote>
          <Vote>7,7</Vote>
          <Vote amount>35 votes</Vote>
        </Votes>
      </Description>
    </Tile>
  </>
);