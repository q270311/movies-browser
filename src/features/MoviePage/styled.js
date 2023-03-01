import styled from "styled-components";

export const BackdropWrapper = styled.div`
  width: 100%;
  min-width: 280px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.color.backdropBlack};
  z-index: -1;
`;

export const Title = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.color.white};
  left: 15%;
  bottom: 20%;
  height: auto;
  font-size: 64px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 24px;
    bottom: 15%;
  }
`;

export const PosterWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75%;
  box-shadow: inset 0 0 40px 40px ${({ theme }) => theme.color.backdropBlack};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    box-shadow: inset 0 0 20px 20px ${({ theme }) => theme.color.backdropBlack};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    box-shadow: inset 0 0 15px 15px ${({ theme }) => theme.color.backdropBlack};
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  z-index: -1;
`;