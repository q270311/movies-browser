import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: grid;
  grid-row: 1/3;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin-right: 16px;
    align-items: center;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
`;