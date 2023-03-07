import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";
import { toPeopleList, toMoviesList } from "../../../core/routes";
import { useState } from "react";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("movies");

  
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
