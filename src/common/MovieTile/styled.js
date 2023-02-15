import styled from "styled-components";

export const Tile = styled.div`
  display:flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  margin: 16px;
  min-width: 324px;
  height: auto;
  border-radius: 5px;
  padding: 16px;

  @media (max-width: 800px) {
    min-width: 288px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.div`

`;

export const Title = styled.h2`

`;

export const Year = styled.p`

`;

export const Genres = styled.div`

`;

export const Genre = styled.p`

`;

export const Votes = styled.div`

`;

export const Vote = styled.p`

`;
