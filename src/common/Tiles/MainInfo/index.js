import { Title, Subtitle } from "./styled";

export const MainInfo = ({ title, year }) => (
  <>
    <Title>
      {title}
    </Title>
    <Subtitle>
      {year}
    </Subtitle>
  </>
);

export const DetailsMainInfo = ({ title, year }) => (
  <>
    <Title
      description
    >
      {title}
    </Title>
    <Subtitle
      description
    >
      {year}
    </Subtitle>
  </>
)