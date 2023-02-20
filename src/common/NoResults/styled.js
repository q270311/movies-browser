import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./noResultsIcon.svg"

export const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin-top: 0px;
  }
`;

export const StyledIcon = styled(NoResultsIcon)`
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    transform: scale(0.5);
  }

  .animate {
    animation: dasharray 2s linear infinite;

    @keyframes dasharray { 
      from {
        stroke-dashoffset: 70;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;