import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "./search.svg";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName.js";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

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
        autoComplete="off"
        onChange={onInputChange}
        value={query || ""}
      />
    </SearchWrapper>
  );
};

export default Search;
