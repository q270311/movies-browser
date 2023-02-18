import styled from "styled-components";

export const Paragraph = styled.p`

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 8px 0 0 0;
    font-size: 12px;
}
`;