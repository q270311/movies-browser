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
  border-radius: 5px;
  border: none;
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  fill: #0044CC;

  ${({ right }) => right && css`
    transform: rotate(180deg);
  `}

  ${({ nomobile }) => nomobile && css`
  display: none;
  
  @media (max-width: 400px) {
    display: block;
  }
  `}
`;

export const ButtonText = styled.span`
  display: block;

  @media (max-width: 400px) {
    display: none;
  }
`;