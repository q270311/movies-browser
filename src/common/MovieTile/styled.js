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
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
`;

export const Genre = styled.p`
  background-color: #E4E6F0;
  border-radius: 5px;
  margin: 0;
  padding: 8px 16px;
  font-size: 14px;

  @media (max-width: 600px) {
    align-self: flex-start;
    font-size: 13px;
  }
`;

export const Votes = styled.div`

`;

export const Vote = styled.p`

`;
