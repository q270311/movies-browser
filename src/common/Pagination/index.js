import { Wrapper, Button, StyledVector } from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <StyledVector />
        <StyledVector />
        First
      </Button>
      <Button>
        <StyledVector />
        <StyledVector />
        Previous
      </Button>
      <p></p>
      <Button>
        Next
        <StyledVector right="true" />
        <StyledVector right="true" />
      </Button>
      <Button>
        Last
        <StyledVector right="true" />
        <StyledVector right="true" />
      </Button>
    </Wrapper>
  )

};