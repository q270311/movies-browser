import { StyledNavigation, NavList, NavItems } from "./styled";
import { NavigationLink } from "../styled";
import { toMoviesList, toPeopleList } from "../../../routes";
import { useState } from "react";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("movies");

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
