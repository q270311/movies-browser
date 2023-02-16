import { Wrapper, Button, StyledVector } from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <StyledVector/>
        <StyledVector/>
        First
      </Button>
      <Button>
      <StyledVector/>
      <StyledVector/>
        Previous
      </Button>
      <p></p>
      <Button>
      <StyledVector/>
      <StyledVector/>
        Next
      </Button>
      <Button>
      <StyledVector/>
      <StyledVector/>
        Last
      </Button>
    </Wrapper>
  )

};