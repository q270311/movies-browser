import styled, { css } from "styled-components";

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  margin: 16px;
  min-width: 324px;
  height: auto;
  border-radius: 5px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    min-width: 288px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  ${({ description }) => description && css`
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      padding: 16px;
    }
  `}
`;

export const Description = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: auto;
  }
  ${({ description }) => description && css`
    margin-left: 40px;
    height: 100%;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      margin-left: 0;
    }
  `}
`;

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
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 13px;
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