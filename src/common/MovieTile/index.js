import { Tile, Image, ImageWrapper, Description, Title, Year, Genres, Genre, Votes, Vote, Star } from "./styled";
import poster from "./poster.png";
import star from "./star.svg";

export const MovieTile = () => (
  <>
    <Tile>
      <ImageWrapper>
        <Image alt="moviePoster" src={poster} />
      </ImageWrapper>
      <Description>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Genres>
          <Genre>Action</Genre>
          <Genre>Adventure</Genre>
          <Genre>Drama</Genre>
        </Genres>
        <Votes>
          <Vote><Star src={star} alt="" /></Vote>
          <Vote>7,7</Vote>
          <Vote count>35 votes</Vote>
        </Votes>
      </Description>
    </Tile>
  </>
);