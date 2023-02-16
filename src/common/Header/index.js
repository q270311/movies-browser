import Navigation from "./Navigation";
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
          <Title>Movies Browser</Title>
        </NavigationLink>
        <Navigation />
      </Container>
    </StyledHeader>
  );
};

export default Header;
