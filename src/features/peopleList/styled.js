import styled from "styled-components";

export const Wrapper = styled.div`  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 12px;
  }
`;