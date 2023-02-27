import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 8px 0 0 0;
  }
  
  ${({ person }) => person && css`
    margin: 0 0 8px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      margin: 12px 0 12px 0;
    }
  `}
`;

export const Paragraph = styled.div`
  display: inline-flex;
  font-size: 18px;

  ${({ person }) => person && css`
  flex-wrap: wrap;
  `}
`;

export const Attribute = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.storm};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: none;
  }

  ${({ person }) => person && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      display: block;
      font-size: 12px;
    }
  `}
`;

export const Value = styled.p`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 12px;
  }
`;