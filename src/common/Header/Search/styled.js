import styled from "styled-components";

export const SearchInput = styled.input``;

export const SearchIcon = styled.img`
  width: 17.98px;
  height: 17.98px;
  color: ${({ theme }) => theme.color.grey};
`;

export const SearchWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
`;
