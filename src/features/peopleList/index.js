import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Wrapper } from "./styled";
import { selectPeople, selectStatus, selectPage, selectTotalPages, goToPage, selectTotalResults, setQuery } from '../peopleListSlice';
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainWrapper } from "../../common/MainWrapper";
import { Pagination } from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTile";
import { NoResults } from "../../common/NoResults";


const PeopleList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const popularPeople = useSelector(selectPeople);
    const status = useSelector(selectStatus);
    const pageNumber = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResults);
    const dispatch = useDispatch();

    useEffect(() => {
        query ? dispatch(setQuery({ query: query })) : dispatch(setQuery({ query: "" }));
        dispatch(goToPage({ page: 1 }));
    }, [query, dispatch]);

    return (
        status === "loading" ?
            <Loader /> :
            status === "error" ?
                <Error /> :
                <>
                    {totalResults === 0 ?
                        <NoResults query={query} /> :
                        (<>
                            <MainWrapper
                                content={
                                    <Wrapper>
                                        {popularPeople.map(person => (
                                            <PersonTile
                                                key={person.id}
                                                id={person.id}
                                                name={person.name}
                                                posterPath={person.profile_path}
                                            />
                                        ))}
                                    </Wrapper>
                                }
                                title={
                                    query ? `Search results for "${query}" (${totalResults})` :
                                        `Popular people`
                                }
                            />
                            <Pagination
                                pageNumber={pageNumber}
                                totalPages={totalPages}
                                goToFirstPage={() => dispatch(goToPage({ page: 1 }))}
                                goToNextPage={() => dispatch(goToPage({ page: pageNumber + 1 }))}
                                goToPreviousPage={() => dispatch(goToPage({ page: pageNumber - 1 }))}
                                goToLastPage={() => dispatch(goToPage({ page: totalPages }))}
                            />
                        </>
                        )}
                </>
    );
};

export default PeopleList;