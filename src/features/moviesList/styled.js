import styled from "styled-components";

export const Wrapper = styled.div`  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
    margin-right: 0px;
  }
`;
