import { Wrapper, Button, StyledVector, ButtonText, Text, PageText } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, selectTotalPages, goToPage } from '../../features/movieDatabaseSlice';

export const Pagination = () => {
  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const firstPage = pageNumber === 1;
  const lastPage = pageNumber === totalPages;

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(goToPage({ page: 1 }))}
        disabled={firstPage}
      >
        <StyledVector
          disabled={firstPage}
        />
        <StyledVector
          mobile="true"
          disabled={firstPage}
        />
        <ButtonText>
          First
        </ButtonText>
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: pageNumber - 1 }))}
        disabled={firstPage}
      >
        <StyledVector
          disabled={firstPage}
        />
        <ButtonText>
          Previous
        </ButtonText>
      </Button>
      <Text>
        Page
      </Text>
      <PageText>
        {pageNumber}
      </PageText>
      <Text>
        of
      </Text>
      <PageText>
        {totalPages}
      </PageText>
      <Button
        onClick={() => dispatch(goToPage({ page: pageNumber + 1 }))}
        disabled={lastPage}
      >
        <ButtonText>
          Next
        </ButtonText>
        <StyledVector
          right="true"
          disabled={lastPage}
        />
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: totalPages }))}
        disabled={lastPage}
      >
        <ButtonText>
          Last
        </ButtonText>
        <StyledVector
          right="true"
          disabled={lastPage}
        />
        <StyledVector
          right="true"
          mobile="true"
          disabled={lastPage}
        />
      </Button>
    </Wrapper>
  )
};