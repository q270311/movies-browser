import { Tile, Description, Title, Year, Votes, Vote, Star } from "./styled";
import { Image } from "./Image";
import star from "./star.svg";
import { Genres } from "./Genres";

export const MovieTile = () => (
  <>
    <Tile>
        <Image />
      <Description>
        <Title>
          Mulan
        </Title>
        <Year>
          2020
        </Year>
        <Genres />
        <Votes>
          <Vote>
            <Star
              src={star}
              alt=""
            />
          </Vote>
          <Vote
            average
          >
            7,7
          </Vote>
          <Vote
            count
          >
            35 votes
          </Vote>
        </Votes>
      </Description>
    </Tile>
  </>
);