import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import { toPeopleList, toMoviesList } from "../../../core/routes";
import search from "./search.svg";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../features/queryParameters";
import searchQueryParamName from "../../../features/searchQueryParamName.js";
import { useLocation } from "react-router";
import { useState } from "react";

const Search = () => {
  const queryURL = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const [query, setQuery] = useState(queryURL);
  const [wait, setWait] = useState(true);

  const onInputChange = ({ target }) => {
    setQuery(target.value);

    if (wait) {
      setWait(false);
      setTimeout(() => {
        replaceQueryParameter({
          baseUrl: location.pathname.includes("movie") ? toMoviesList() : toPeopleList(),
          key: searchQueryParamName,
          value: target.value.trim() !== "" ? target.value : undefined,
        });
        setWait(true);
      }, 3000);
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon src={search} />
      <SearchInput
        onChange={onInputChange}
        value={query || ""}
        placeholder={`${location.pathname.includes("movie")
          ? "Search for movies..."
          : " Search for people..."
          }`}
      />
    </SearchWrapper>
  );
};

export default Search;
