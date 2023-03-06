import Navigation from "./Navigation";
import Search from "./Search";
import {
  Wrapper,
  StyledHeader,
  Video,
  MovieTitle,
  NavigationLink,
} from "./styled";
import video from "./video.svg";

const Header = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <NavigationLink to="/movies-list">
          <Video src={video} />
          <MovieTitle>Movies Browser</MovieTitle>
        </NavigationLink>
        <Navigation />
        <Search />
      </StyledHeader>
    </Wrapper>
  );
};

export default Header;
