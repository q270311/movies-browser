import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "./Vector.svg"

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #D6E4FF;
  color: #333333;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #E4E6F0;
    color: #18181B;
    cursor: default;
  }
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  fill: #0044CC;

  @media (max-width: 400px) {
    width: 5px;
    height: 8px;
  }

  ${({ right }) => right && css`
    transform: rotate(180deg);
  `}

  ${({ nomobile }) => nomobile && css`
  display: none;
  
  @media (max-width: 400px) {
    display: block;
  }
  `}

  ${({ disabled }) => disabled && css`
    fill: #7E839A;
  `}
`;

export const ButtonText = styled.span`
  display: block;

  @media (max-width: 400px) {
    display: none;
  }
`;