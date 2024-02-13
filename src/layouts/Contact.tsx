import { SectionText } from "../components/styled/SectionText";
import { Section } from "../components/styled/Section";
import { Container } from "../components/styled/Container";
import styled from "styled-components";
import { SectionTitle } from "../components/styled/SectionTitle";
import { StyledButton } from "../components/styled/StyledButton";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { theme } from "../styles/Theme.styled";

export const Contact = () => {
  return (
    <StyledContact>
      <Section>
        <Container>
          <FlexWrapper wrap={"wrap"} align={"center"} rowGap={"3rem"}>
            <SectionTitle>Get in Touch</SectionTitle>
            <SectionText>
              Feel free to contact me. I am availablr for freelance!
            </SectionText>
            <StyledForm>
              <FlexWrapper
                wrap={"wrap"}
                justify={"space-between"}
                gap={"1.25rem"}
              >
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
              </FlexWrapper>
            </StyledForm>
          </FlexWrapper>
        </Container>
      </Section>
    </StyledContact>
  );
};

type StyledContactProps = {};
const StyledContact = styled.div<StyledContactProps>`
  background: ${theme.colors.lightBg};
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    top: 0;
    bottom: 50%;
    border-bottom: 7px solid ${theme.colors.accent_1};
    background-color: ${theme.colors.accent_2};
    z-index: 0;
  }

  h2,
  p {
    width: 50%;
    position: relative;
    z-index: 5;
  }
`;

type StyledFormProps = {};
const StyledForm = styled.form<StyledFormProps>`
  width: 100%;
  background-color: ${theme.colors.light};
  padding: 2rem 2rem 3rem;
  box-shadow: 30px 60px 50px rgba(17, 18, 53, 0.08);
  position: relative;
  z-index: 5;

  label {
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label:last-of-type {
    width: 100%;
  }

  textarea {
    resize: none;
    height: 170px;
  }

  button {
    margin-top: 1rem;
  }
`;

type StyledFieldProps = {};
const StyledField = styled.input<StyledFieldProps>`
  width: 100%;
  background-color: ${theme.colors.lightBg};
  padding: 1rem;
  margin-top: 0.7rem;
  text-overflow: ellipsis;
  border: 1px solid #f1dfce;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;

  &:focus-visible {
    background-color: ${theme.colors.light};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.grayMedium};
    letter-spacing: 1px;
  }
`;

type StyledLabelProps = {};
const StyledLabel = styled.label<StyledLabelProps>``;
