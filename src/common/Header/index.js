import {
  Container,
  StyledHeader,
  Video,
  Title,
  NavigationLink,
  StyledNavigation,
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
        <StyledNavigation>
            
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};

export default Header;
