import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { selectPeople, selectStatus, selectPage, selectTotalPages, goToPage } from '../peopleListSlice';
import Loader from "../../common/Loader";
import { Error } from "../../common/Error";
import { MainWrapper } from "../../common/MainWrapper";
import { Pagination } from "../../common/Pagination";
import PersonTile from "../../common/Tiles/PersonTile";


const PeopleList = () => {
    const popularPeople = useSelector(selectPeople);
    const status = useSelector(selectStatus);
    const pageNumber = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const dispatch = useDispatch();

    return (
        status === "loading" ?
            <Loader /> :
            status === "error" ?
                <Error /> :
                <>
                    <MainWrapper
                        content={
                            <Wrapper>
                                {popularPeople.map(person => (
                                    <PersonTile
                                        key={person.id}
                                        name={person.name}
                                        posterPath={person.profile_path}
                                    />
                                ))}
                            </Wrapper>
                        }
                        title={"Popular people"}
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
    );
};

export default PeopleList;