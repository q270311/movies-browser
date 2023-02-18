import styled from "styled-components";

export const Title = styled.h2`
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 500;
  word-break: break-word;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 4px;
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;
`;