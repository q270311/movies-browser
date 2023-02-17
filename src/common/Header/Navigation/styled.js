import styled, { css } from "styled-components";

export const StyledNavigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0 411px 0 104px;
`;

export const NavItems = styled.li`
  padding-right: 64px;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 24px;
      gap: 10px;
      width: 102px;
      height: 48px;
      border: 1px solid #ffffff;
      border-radius: 24px;
    `}
`;
