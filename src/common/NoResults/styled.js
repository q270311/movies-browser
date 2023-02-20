import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin-top: 20px;
  }
`;