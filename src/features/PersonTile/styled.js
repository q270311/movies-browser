import styled from "styled-components";

export const PersonTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 65px 16px;
  gap: 12px;
  width: 208px;
  height: 339px;
  background: #ffffff;
  transition: 0.7s linear;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  &:hover {
    transform: scale(1.05);
  }
`;
