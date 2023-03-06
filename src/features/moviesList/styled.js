import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-template-rows: auto;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 12px;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
`;