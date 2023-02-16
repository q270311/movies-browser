import styled from "styled-components";
import { ReactComponent as Vector } from "./Vector.svg"

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const Button = styled.button`
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
`;