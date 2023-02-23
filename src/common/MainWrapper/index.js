import { PageWrapper, Title } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ children }) => (
  <>
    <Header />
    <PageWrapper>
      <Title>Popular movies</Title>
      {children}
    </PageWrapper>
  </>
);