import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.mercury};
  }
`;