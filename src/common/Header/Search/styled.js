import styled from "styled-components";

export const SearchInput = styled.input`
  font-family: "Poppins";
  font-style: normal;
  color: ${({ theme }) => theme.color.grey};
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  background-color: transparent;
  outline: 0;
  padding: 0;
  width: 155px;
  height: 24px;
`;

export const SearchIcon = styled.img`
  width: 17.98px;
  height: 17.98px;
  color: ${({ theme }) => theme.color.grey};
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  width: 432px;
  height: 48px;
  border: 0;
`;
