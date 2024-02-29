import { SectionText } from "../components/styled/SectionText";
import { Container } from "../components/styled/Container";
import styled from "styled-components";
import { SectionTitle } from "../components/styled/SectionTitle";
import { StyledButton } from "../components/styled/StyledButton";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { myTheme } from "../styles/MyTheme.styled";
import { outline } from "../styles/mixins";
import { getResponsiveSize } from "../common/utils/getResponsiveSize";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <ContactTitleContainer>
          <SectionTitle>Get in Touch</SectionTitle>
          <SectionText>
            Feel free to contact me. I am availablr for freelance!
          </SectionText>
        </ContactTitleContainer>
        <StyledForm>
          <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"1.25rem"}>
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
      </Container>
    </StyledContact>
  );
};

type StyledContactProps = {};
const StyledContact = styled.section<StyledContactProps>`
  background: ${myTheme.colors.lightBg};
  padding-block: ${getResponsiveSize(50, 100, 400)};
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    top: 0;
    bottom: 50%;
    border-bottom: 7px solid ${myTheme.colors.accent_1};
    background-color: ${myTheme.colors.accent_2};
    z-index: 0;
  }

  h2,
  p {
    width: 50%;
    position: relative;
    z-index: 5;
    @media ${myTheme.media.tablet} {
      width: 100%;
    }
  }
`;

type StyledFormProps = {};
const StyledForm = styled.form<StyledFormProps>`
  width: 100%;
  background-color: ${myTheme.colors.light};
  padding-inline: ${getResponsiveSize(18, 50)};
  padding-block: 2rem 3rem;
  box-shadow: 30px 60px 50px rgba(17, 18, 53, 0.08);
  position: relative;
  z-index: 5;

  label {
    display: flex;
    flex-basis: calc((100% - 3rem) / 3);
    flex-direction: column;

    @media ${myTheme.media.tablet} {
      flex-basis: 100%;
    }
  }

  label:last-of-type {
    flex-basis: 100%;
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
  background-color: ${myTheme.colors.lightBg};
  padding: 1rem;
  margin-top: 0.7rem;
  text-overflow: ellipsis;
  border: 1px solid #f1dfce;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;

  &:focus-visible {
    background-color: ${myTheme.colors.light};
    outline: none;
  }

  &::placeholder {
    color: ${myTheme.colors.grayMedium};
    letter-spacing: 1px;
  }
`;

type StyledLabelProps = {};
const StyledLabel = styled.label<StyledLabelProps>`
  //${outline()}
`;

const ContactTitleContainer = styled.div<{}>`
  display: flex;
  padding-bottom: ${getResponsiveSize(30, 80)};
  @media ${myTheme.media.tablet} {
    display: block;
  }
`;
