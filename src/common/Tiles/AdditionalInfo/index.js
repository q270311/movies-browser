import { Wrapper, Paragraph, Attribute, Value } from "./styled";

export const AdditionalInfo = ({ firstValue, secondValue }) => (
  <Wrapper>
    {firstValue.length !== 0 && (
      <Paragraph>
        <Attribute>
          Production:&nbsp;
        </Attribute>
        <Value>
          {firstValue}
        </Value>
      </Paragraph>
    )}
    {secondValue && (
      <Paragraph>
        <Attribute>
          Release date:&nbsp;
        </Attribute>
        <Value>
          {secondValue}
        </Value>
      </Paragraph>
    )}
  </Wrapper>
);

export const PersonAdditionalInfo = ({ firstValue, secondValue }) => (
  <Wrapper person>
    {firstValue && (
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
    )}
    {secondValue && (
      <Paragraph person>
        <Attribute person>
          Place of birth:&nbsp;
        </Attribute>
        <Value>
          {secondValue}
        </Value>
      </Paragraph>
    )}
  </Wrapper>
);