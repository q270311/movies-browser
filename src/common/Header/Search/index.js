import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "./search.svg";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName.js";
import { useLocation } from "react-router";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <SearchWrapper>
      <SearchIcon src={search} />
      <SearchInput
        onChange={onInputChange}
        value={query || ""}
        placeholder={`${
          location.pathname.includes("movies")
            ? "Search for movies..."
            : " Search for people..."
        }`}
      />
    </SearchWrapper>
  );
};

export default Search;
