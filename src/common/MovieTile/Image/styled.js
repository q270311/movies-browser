import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin-right: 16px;
    align-items: center;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
`;