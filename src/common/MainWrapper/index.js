import { PageWrapper, Title, Subtitle } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ backdrop, content, title, firstSubtitle, secondSubtitle, firstSection, secondSection }) => (
  <>
    <Header />
    {backdrop}
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