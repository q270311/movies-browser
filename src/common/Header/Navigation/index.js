import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";
import {toMoviesList, toPeopleList} from '../../../routes';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavList>
        <NavigationLink to={toMoviesList()}>
          <NavItems primary>Movies</NavItems>
        </NavigationLink>
        <NavigationLink to={toPeopleList()}>
          <NavItems>People</NavItems>
        </NavigationLink>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
