import { PageWrapper, Title, Subtitle } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ content, extraContent, title }) => (
  <>
    <Header />
    <PageWrapper>
      <Title>{title}</Title>
      {content}
      <Subtitle>Cast</Subtitle>
      {extraContent}
    </PageWrapper>
  </>
);