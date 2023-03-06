import styled, { css } from "styled-components";

export const StyledNavigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0 120px 0 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 20px 10px 20px 0;
    margin: 0;
    gap: 10px;
  }
`;

export const NavItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px 0 50px;
  width: 54px;
  height: 21px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};

  ${({ primary }) =>
    primary &&
    css`
      width: 102px;
      height: 48px;
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 12px;
    width: 70px;
    height: 34px;
  }
`;
