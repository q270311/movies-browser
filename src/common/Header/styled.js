import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
width: 1920px;
height: 94px;
background: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
display: flex;
align-items: center;
gap: 16px;
`;

export const Video = styled.img`
width: 40px;
height: 40px;
`;

export const Title = styled.h1`
width: 168px;
height: 40px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 40px;
letter-spacing: -1.5px;
text-transform: capitalize;
color: ${({ theme }) => theme.color.white};
margin: 0;
`;