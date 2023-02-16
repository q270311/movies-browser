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
  transition: 0.3s;
  
  &:hover {
    filter: brightness(105%);
    transform: scale(1.01);
  }

  &:disabled {
    background-color: #E4E6F0;
    color: #18181B;
    cursor: default;

    &:hover {
      filter: none;
    }
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

  ${({ mobile }) => mobile && css`
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

export const Text = styled.span`
  align-self: center;
  color: #7E839A;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const PageText = styled.span`
`;