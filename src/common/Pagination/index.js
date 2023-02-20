import { Wrapper, Button, StyledVector, ButtonText, Text, PageText } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, selectTotalPages, goToPage } from '../../features/movieDatabaseSlice';

export const Pagination = () => {
  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(goToPage({ page: 1 }))}
        disabled={pageNumber === 1}
      >
        <StyledVector />
        <StyledVector
          mobile="true"
        />
        <ButtonText>
          First
        </ButtonText>
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: pageNumber - 1 }))}
        disabled={pageNumber === 1}
      >
        <StyledVector />
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
        disabled={pageNumber === totalPages}
      >
        <ButtonText>
          Next
        </ButtonText>
        <StyledVector
          right="true"
        />
      </Button>
      <Button
        onClick={() => dispatch(goToPage({ page: totalPages }))}
        disabled={pageNumber === totalPages}
      >
        <ButtonText>
          Last
        </ButtonText>
        <StyledVector
          right="true"
        />
        <StyledVector
          right="true"
          mobile="true"
        />
      </Button>
    </Wrapper>
  )
};