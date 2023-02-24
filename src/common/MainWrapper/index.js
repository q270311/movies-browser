import { PageWrapper, Title, Subtitle } from "./styled";
import Header from "../Header";

export const MainWrapper = ({ content, extraContent, title, subtitle }) => (
  <>
    <Header />
    <PageWrapper>
      <Title>
        {title}
      </Title>
      {content}
      <Subtitle>
        {subtitle}
      </Subtitle>
      {extraContent}
    </PageWrapper>
  </>
);