import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavList>
        <NavigationLink to="/movies-list">
          <NavItems>Movies</NavItems>
        </NavigationLink>
        <NavigationLink to="/people-list">
          <NavItems>People</NavItems>
        </NavigationLink>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
