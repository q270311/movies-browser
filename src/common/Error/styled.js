import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const Wrapper = styled.div`
  margin: 195px auto 0 auto;
  text-align: center;
  
  @media (max-width: 400px) {
    margin-top: 100px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 100px;

  @media (max-width: 400px) {
    width: 80px;
  }
`;