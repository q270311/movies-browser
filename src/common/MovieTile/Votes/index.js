import { Wrapper, Vote, Star, Total } from "./styled";
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

export const ExtendedVotes = () => (
  <Wrapper>
    <Vote>
      <Star
        src={star}
        alt=""
      />
    </Vote>
    <Vote
      average
      extended
    >
      7,7
    </Vote>
    <Total>
      /10
    </Total>
    <Vote
      smaller
    >
      35 votes
    </Vote>
  </Wrapper>
);