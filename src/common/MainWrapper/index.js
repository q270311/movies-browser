import { PageWrapper, Title, Subtitle } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ content, title, firstSubtitle, secondSubtitle, firstSection, secondSection }) => (
  <>
    <Header />
    <PageWrapper>
      <Title>
        {title}
      </Title>
      {content}
      <Subtitle>
        {firstSubtitle}
      </Subtitle>
      {firstSection}
      <Subtitle>
        {secondSubtitle}
      </Subtitle>
      {secondSection}
    </PageWrapper>
  </>
);