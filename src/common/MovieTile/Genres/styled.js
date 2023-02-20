import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Genre = styled.p`
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  margin: 0;
  padding: 8px 16px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    align-self: flex-start;
    font-size: 10px;
    padding: 4px 8px;
  }
`;