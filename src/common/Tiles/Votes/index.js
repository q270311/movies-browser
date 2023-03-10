import { Wrapper, Vote, Star, Total, Container } from "./styled";
import star from "./star.svg";

export const Votes = ({ voteAverage, voteCount }) => (
  <Wrapper>
    {voteAverage ? (
      <>
        <Vote>
          <Star
            src={star}
            alt="star_icon"
          />
        </Vote>
        <Vote
          average
        >
          {voteAverage.toFixed(1)}
        </Vote>
        <Vote
          count
        >
          {voteCount} votes
        </Vote>
      </>
    )
      :
      <Vote count>No votes yet</Vote>
    }
  </Wrapper>
);

export const ExtendedVotes = ({ voteAverage, voteCount }) => (
  <Wrapper>
    {voteAverage ? (
      <>
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
          {voteAverage.toFixed(1)}
        </Vote>
        <Total>
          /10
        </Total>
        <Vote
          smaller
        >
          {voteCount} votes
        </Vote>
      </>)
      :
      <Vote>No votes yet</Vote>
    }
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
        backdrop
      >
        {voteAverage.toFixed(1)}
      </Vote>
      <Total
        backdrop
      >
        /10
      </Total>
    </Container>
    <Container>
      <Vote
        backdrop
        mobile
      >
        {voteCount} votes
      </Vote>
    </Container>
  </Wrapper>
);