import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PersonTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-width: 136px;
  height: auto;
  background: ${({ theme }) => theme.color.white};
  transition: 0.7s linear;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 8px;
  }
`;

export const PersonHeading = styled.h2`
  width: 100%; 
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 14px;
  }
`;

export const PersonSubtitle = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 13px;
  }
`;

export const PersonImage = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;
`;

export const PersonLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  gap: 16px;
  flex-wrap: wrap;
`;
