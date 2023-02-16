import {
  Container,
  StyledHeader,
  Video,
  Title,
  NavigationLink,
} from "./styled";
import video from "./video.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavigationLink>
          <Video src={video} />
          <Title>Movie Browser</Title>
        </NavigationLink>
      </Container>
    </StyledHeader>
  );
};

export default Header;
