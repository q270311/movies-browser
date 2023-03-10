import styled, { css } from "styled-components";

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  min-width: 324px;
  height: auto;
  border-radius: 5px;
  padding: 16px;
  transition: opacity 1s linear, transform 1s linear;
  grid-template-rows: auto 1fr;
  
  &:hover {
    transform: scale(1.05)
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    min-width: 288px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  ${({ description }) => description && css`
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 2fr;

    &:hover {
      transform: scale(1)
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      padding: 16px;
      grid-template-columns: 1fr 2fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const Description = styled.div`
  height: 225px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: auto;
  }

  ${({ description }) => description && css`
    margin-left: 40px;
    height: 90%;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      margin-left: 0;
    }
  `}
`;

export const VotesWrapper = styled.div`
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin-top: 4px;
  }
`;

export const Details = styled.div`
  grid-column: auto; 
  padding-top: 16px;
  font-size: 20px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 14px;
    grid-column: span 2; 
    margin-left: 0;
  }
`;