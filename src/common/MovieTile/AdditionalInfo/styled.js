import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 8px 0 0 0;
  }
`;

export const Paragraph = styled.div`
  display: inline-flex;
  font-size: 18px;
`;

export const Attribute = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.storm};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: none;
  }
`;

export const Value = styled.p`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 12px;
  }
`;