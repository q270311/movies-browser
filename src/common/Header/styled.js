import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
  min-width: 320px;
  height: 94px;
  background: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: 142px;
  }
`;

export const StyledHeader = styled.header`
  width: 1400px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

export const Video = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    width: 15px;
  }
`;

export const MovieTitle = styled.h1`
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