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
`;

export const Description = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: auto;
  }
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
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 16px;
  }
`;