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
            primary={selectedItem === "movies"}
            onClick={() => handleClick("movies")}
          >
            Movies
          </NavItems>
        </NavigationLink>
        <NavigationLink to={toPeopleList()}>
          <NavItems
            primary={selectedItem === "people-list"}
            onClick={() => handleClick("people-list")}
          >
            People
          </NavItems>
        </NavigationLink>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
