import Navigation from "./Navigation";
import Search from "./Search";
import {
  Container,
  StyledHeader,
  Video,
  MovieTitle,
  NavigationLink,
} from "./styled";
import video from "./video.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavigationLink to="/movies-list">
          <Video src={video} />
          <MovieTitle>Movies Browser</MovieTitle>
        </NavigationLink>
        <Navigation />
        <Search />
      </Container>
    </StyledHeader>
  );
};

export default Header;
