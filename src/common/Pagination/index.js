import { Wrapper, Button, StyledVector, ButtonText } from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <StyledVector />
        <StyledVector nomobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <StyledVector />
        <ButtonText> Previous</ButtonText>
      </Button>
      <p></p>
      <Button>
        <ButtonText> Next</ButtonText>
        <StyledVector right="true" />
      </Button>
      <Button>
        <ButtonText> Last</ButtonText>
        <StyledVector right="true" />
        <StyledVector right="true" nomobile="true" />
      </Button>
    </Wrapper>
  )

};