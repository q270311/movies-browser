import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";
import { toPeopleList, toMoviesList } from "../../../core/routes";
import { useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavigation>
      <NavList>
        <NavigationLink to={toMoviesList()}>
          <NavItems
            primary={
              location.pathname === toMoviesList() ||
              location.pathname.includes("movie")
            }
          >
            Movies
          </NavItems>
        </NavigationLink>
        <NavigationLink to={toPeopleList()}>
          <NavItems
            primary={
              location.pathname === toPeopleList() ||
              location.pathname.includes("person")
            }
          >
            People
          </NavItems>
        </NavigationLink>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
