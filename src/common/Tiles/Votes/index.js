import { Wrapper, Vote, Star, Total, Container } from "./styled";
import star from "./star.svg";

export const Votes = ({ voteAverage, voteCount }) => (
  <Wrapper>
    <Vote>
      <Star
        src={star}
        alt="star_icon"
      />
    </Vote>
    <Vote
      average
    >
      {voteAverage}
    </Vote>
    <Vote
      count
    >
      {voteCount} votes
    </Vote>
  </Wrapper>
);

export const ExtendedVotes = ({ voteAverage, voteCount }) => (
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
      {voteAverage}
    </Vote>
    <Total>
      /10
    </Total>
    <Vote
      smaller
    >
      {voteCount} votes
    </Vote>
  </Wrapper>
);

export const BackdropVotes = ({ voteAverage, voteCount }) => (
  <Wrapper
    backdrop
  >
    <Container>
      <Vote>
        <Star
          src={star}
          alt=""
          backdrop
        />
      </Vote>
      <Vote
        big
      >
        {voteAverage}
      </Vote>
      <Total
        backdrop
      >
        /10
      </Total>
    </Container>
    <div>
      <Vote
        backdrop
      >
        {voteCount} votes
      </Vote>
    </div>
  </Wrapper>
);