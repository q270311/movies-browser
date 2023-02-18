import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;
`;

export const Vote = styled.p`
  margin: 0;
  display: flex;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 13px;
    align-self: flex-start;
  }
  
  ${({ average }) => average && css`
    font-weight: 600;
  `}

  ${({ count }) => count && css`
    color: ${({ theme }) => theme.color.waterloo};
  `}
`;