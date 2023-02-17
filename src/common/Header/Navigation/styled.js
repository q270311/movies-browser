import styled from "styled-components";

export const StyledNavigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
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
`;
