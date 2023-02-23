import { Wrapper, Button, StyledVector, ButtonText, Text, PageText } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, selectTotalPages, goToPage } from '../../features/movieDatabaseSlice';

export const Pagination = () => {
  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === totalPages;

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(goToPage({ page: 1 }))}
        disabled={isFirstPage}
      >
        <StyledVector
          disabled={isFirstPage}
        />
        <StyledVector
          mobile="true"
          disabled={isFirstPage}
        />
        <ButtonText>
          First
        </ButtonText>
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: pageNumber - 1 }))}
        disabled={isFirstPage}
      >
        <StyledVector
          disabled={isFirstPage}
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
        disabled={isLastPage}
      >
        <ButtonText>
          Next
        </ButtonText>
        <StyledVector
          right="true"
          disabled={isLastPage}
        />
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: totalPages }))}
        disabled={isLastPage}
      >
        <ButtonText>
          Last
        </ButtonText>
        <StyledVector
          right="true"
          disabled={isLastPage}
        />
        <StyledVector
          right="true"
          mobile="true"
          disabled={isLastPage}
        />
      </Button>
    </Wrapper>
  )
};