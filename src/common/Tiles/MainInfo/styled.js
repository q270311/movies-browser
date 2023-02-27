import styled, { css } from "styled-components";

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
  }

  ${({ description }) => description && css`
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 600;
  `}
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 13px;
  }

  ${({ description }) => description && css`
    color: ${({ theme }) => theme.color.black};
    font-size: 22px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      color: ${({ theme }) => theme.color.waterloo};
      font-size: 13px;
    }
  `}
`;