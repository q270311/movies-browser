import { StyledIcon, Wrapper } from "./styled";
import { MainWrapper } from "../MainWrapper"

export const NoResults = ({ query }) => (
  <MainWrapper
    content={
      <Wrapper>
        <StyledIcon />
      </Wrapper>
    }
    title={
      `Sorry, there are no results for “${query}”`
    }
  />
);