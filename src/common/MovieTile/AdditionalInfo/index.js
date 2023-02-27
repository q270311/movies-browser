import { Wrapper, Paragraph, Attribute, Value } from "./styled";

export const AdditionalInfo = ({ firstValue, secondValue }) => (
  <Wrapper>
    <Paragraph>
      <Attribute>
        Production:&nbsp;
      </Attribute>
      <Value>
        {firstValue}
      </Value>
    </Paragraph>
    <Paragraph>
      <Attribute>
        Release date:&nbsp;
      </Attribute>
      <Value>
        {secondValue}
      </Value>
    </Paragraph>
  </Wrapper>
);