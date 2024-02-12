import { SectionText } from "../components/styled/SectionText";
import { StyledSection } from "../components/styled/StyledSection";
import { SectionWrapper } from "../components/styled/SectionWrapper";
import styled from "styled-components";
import { SectionMainTitle } from "../components/styled/SectionMainTitle";
import { StyledButton } from "../components/styled/StyledButton";

export const Contact = () => {
  return (
    <StyledSection>
      <SectionWrapper>
        <SectionMainTitle>Get in Touch</SectionMainTitle>
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
      </SectionWrapper>
    </StyledSection>
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
