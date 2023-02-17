import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "./search.svg";

const Search = () => {
  return (
    <SearchWrapper>
      <SearchIcon src={search} />
      <SearchInput />
    </SearchWrapper>
  );
};

export default Search;
