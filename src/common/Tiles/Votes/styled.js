import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    gap: 6px;
  }
  
  ${({ backdrop }) => backdrop && css`
    color: ${({ theme }) => theme.color.white};
    flex-direction: column;
    position: absolute;
    height: auto;
    left: 15%;
    bottom: 10%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      flex-direction: row;
    }
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
    flex: none;
  `}

  ${({ extended }) => extended && css`
    font-size: 22px;
    font-weight: 500;
  `}
  
  ${({ smaller }) => smaller && css`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    flex: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    color: ${({ theme }) => theme.color.waterloo};
  }
  `}

  ${({ backdrop }) => backdrop && css`
    color: ${({ theme }) => theme.color.white};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      font-size: 14px;
      align-self: flex-end;
    }
  `}

  ${({ big }) => big && css`
    font-size: 30px;
    font-weight: 500;
  `}

  ${({ mobile }) => mobile && css`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 10px;
  }
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      display: flex;
      align-self: flex-end;
      font-size: 10px;
    }
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