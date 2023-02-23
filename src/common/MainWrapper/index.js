import { PageWrapper, Title, Subtitle } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ content, extraContent }) => (
  <>
    <Header />
    <PageWrapper>
      <Title>Popular movies</Title>
      {content}
      <Subtitle>Cast</Subtitle>
      {extraContent}
    </PageWrapper>
  </>
);