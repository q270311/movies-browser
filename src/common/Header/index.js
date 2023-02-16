import { Container, StyledHeader, Video, Title } from "./styled";
import video from "./video.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Video src={video} />
        <Title>Movies Browser</Title>
      </Container>
    </StyledHeader>
  );
};

export default Header;
