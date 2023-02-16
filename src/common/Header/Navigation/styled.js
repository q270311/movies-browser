import styled from "styled-components";

export const StyledNavigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px 24px;
  gap: 10px;
  width: 102px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 24px;
`;

export const NavItems = styled.li`
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
