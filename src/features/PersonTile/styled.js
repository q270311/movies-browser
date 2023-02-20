import styled from "styled-components";

export const PersonTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 65px 16px;
  gap: 12px;
  width: 208px;
  height: 339px;
  background: ${({ theme }) => theme.color.white};
  transition: 0.7s linear;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  &:hover {
    transform: scale(1.05);
  }
`;

export const PersonHeading = styled.h2`
  width: 176px;
  height: 29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0;
`;

export const PersonImage = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;
`;
