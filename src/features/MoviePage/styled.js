import styled from "styled-components";

export const BackdropWrapper = styled.div`
  width: 100%;
  min-width: 280px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  background-color: black;
  z-index: -1;
`;

export const Title = styled.h1`
  position: absolute;
  color: white;
  left: 15%;
  bottom: 20%;
  height: auto;
  font-size: 64px;
  font-weight: 600;
`;

export const PosterWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75%;
`;

export const Backdrop = styled.img`
  width: 100%;
  z-index: -1;
`;