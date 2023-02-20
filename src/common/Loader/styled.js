import styled from "styled-components";
import { ReactComponent as LoaderIcon } from "./loaderIcon.svg";

export const StyledIcon = styled(LoaderIcon)`
  width: 91px;
  animation: rotate 1s linear infinite;
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;