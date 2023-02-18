import { Wrapper, ErrorIcon, Title } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>
        Ooops! Something went wrong...
      </Title>
    </Wrapper>
  );
};