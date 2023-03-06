import styled, { css } from "styled-components";

export const StyledNavigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const NavItems = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  padding: 12px 24px;

  ${({ primary }) =>
    primary &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 10px 15px;
  }
`;