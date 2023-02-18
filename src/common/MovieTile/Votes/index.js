import { Wrapper, Vote, Star } from "./styled";
import star from "./star.svg";

export const Votes = () => (
  <Wrapper>
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
  </Wrapper>
);