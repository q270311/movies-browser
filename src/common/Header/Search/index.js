import { SearchIcon, SearchInput } from "./styled";
import search from "./search.svg";

const Search = () => {
    return (
        <SearchIcon src={search}/>
        <SearchInput/>
    );
};

export default Search;