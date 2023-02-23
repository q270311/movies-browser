import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-top: 56px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-top: 64px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 0;
  }
`;