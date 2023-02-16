import { Container, StyledHeader, Video } from "./styled";
import video from "./video.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Video src={video} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
