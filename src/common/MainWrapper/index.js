import { PageWrapper } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ children }) => (
  <>
    <Header />
    <PageWrapper>
      {children}
    </PageWrapper>
  </>
);