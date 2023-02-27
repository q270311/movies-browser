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

export const PersonAdditionalInfo = ({ firstValue, secondValue }) => (
  <Wrapper person>
    <Paragraph person>
      <Attribute>
        Date of birth:&nbsp;
      </Attribute>
      <Attribute person mobile>
        Birth:&nbsp;
      </Attribute>
      <Value>
        {firstValue}
      </Value>
    </Paragraph>
    <Paragraph person>
      <Attribute person>
        Place of birth:&nbsp;
      </Attribute>
      <Value>
        {secondValue}
      </Value>
    </Paragraph>
  </Wrapper>
);