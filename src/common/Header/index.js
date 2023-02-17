import Navigation from "./Navigation";
import Search from "./Search";
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
        <NavigationLink to="/movies-list">
          <Video src={video} />
          <Title>Movies Browser</Title>
        </NavigationLink>
        <Navigation />
        <Search />
      </Container>
    </StyledHeader>
  );
};

export default Header;
