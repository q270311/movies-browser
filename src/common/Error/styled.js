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

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: 400px) {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 14px;
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  line-height: 19px;
  transition: 0.3s;

  &:hover {
    filter: brightness(125%);
    transform: scale(1.05);
  }
`;