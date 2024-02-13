import styled from "styled-components";
import photo from "../assets/jpg/photo/image-01-424x491.jpg";
import { SectionText } from "../components/styled/SectionText";
import { Section } from "../components/styled/Section";
import { Container } from "../components/styled/Container";

export const About = () => {
  return (
    <Section>
      <Container>
        <StyledAbout>
          <div>
            <StyledAboutTitle>About me</StyledAboutTitle>
            <SectionText>
              My name is James Adams. I’m a UI/UX & graphic designer. I believe
              that a well-designed product leads a business to success. I love
              learning how people think and behave, and I leverage research to
              design user-centered products and experiences which solve both
              user and business problems.
            </SectionText>
            <a>send message</a>
          </div>

          <div>
            <img alt={"portrait"} src={photo} />
          </div>
        </StyledAbout>
      </Container>
    </Section>
  );
};

type StyledAboutProps = {
  // height?: string
  // width?: string
};
const StyledAbout = styled.section<StyledAboutProps>``;

type StyledAboutTitleProps = {
  // height?: string
  // width?: string
};
const StyledAboutTitle = styled.h1<StyledAboutTitleProps>``;
