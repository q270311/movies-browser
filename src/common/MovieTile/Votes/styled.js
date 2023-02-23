import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;

  ${({ backdrop }) => backdrop && css`
    color: white;
    flex-direction: column;
  `}
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

  ${({ extended }) => extended && css`
    font-size: 22px;
    font-weight: 500;
  `}
  
  ${({ smaller }) => smaller && css`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    color: ${({ theme }) => theme.color.waterloo};
  }
  `}

  ${({ backdrop }) => backdrop && css`
    color: white;
  `}

  ${({ big }) => big && css`
    font-size: 30px;
    font-weight: 500;
  `}
`;

export const Total = styled.p`
  font-size: 14px;
  margin: 0;
  display: flex;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: none;
  }

  ${({ backdrop }) => backdrop && css`
    font-size: 16px;
  `}
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 16px;
  }

  ${({ backdrop }) => backdrop && css`
    width: 40px;
  `}
`;

export const Container = styled.div`
  display: inline-flex;
  gap: 8px;
`;