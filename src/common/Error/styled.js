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

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 38px;
  margin-bottom: 0px;

  @media (max-width: 400px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;