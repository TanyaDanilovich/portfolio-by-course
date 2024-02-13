import { SectionText } from "../components/styled/SectionText";
import { Section } from "../components/styled/Section";
import { Container } from "../components/styled/Container";
import styled from "styled-components";
import { SectionTitle } from "../components/styled/SectionTitle";
import { StyledButton } from "../components/styled/StyledButton";

export const Contact = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Get in Touch</SectionTitle>
        <SectionText>
          Feel free to contact me. I am availablr for freelance!
        </SectionText>
        <StyledForm>
          <StyledLabel>
            Your name
            <StyledField placeholder={"Your name"} />
          </StyledLabel>

          <StyledLabel>
            Your E-mail
            <StyledField placeholder={"Your E-mail"} />
          </StyledLabel>

          <StyledLabel>
            Your phone
            <StyledField placeholder={"Your phone"} />
          </StyledLabel>

          <StyledLabel>
            Your message
            <StyledField as={"textarea"} placeholder={"Your message"} />
          </StyledLabel>

          <StyledButton type={"submit"}>Send Message</StyledButton>
        </StyledForm>
      </Container>
    </Section>
  );
};

type StyledFormProps = {
  // height?: string
  // width?: string
};
const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
`;

type StyledFieldProps = {
  // height?: string
  // width?: string
};
const StyledField = styled.input<StyledFieldProps>``;

type StyledLabelProps = {
  // height?: string
  // width?: string
};
const StyledLabel = styled.label<StyledLabelProps>``;
