import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    overflow: hidden;
    hight: 142px;
    flex-wrap: wrap;
    padding: 18px;
    width: 100%;
  }
`;

export const Video = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 18px;
  }
`;

export const MovieTitle = styled.h1`
  width: 168px;
  height: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 13px;
    width: 90px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  gap: 16px;
  flex-wrap: wrap;
`;