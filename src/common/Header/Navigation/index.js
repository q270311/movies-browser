import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavList>
        <NavigationLink>
          <NavItems>Movies</NavItems>
        </NavigationLink>
        <NavigationLink>
          <NavItems>People</NavItems>
        </NavigationLink>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
