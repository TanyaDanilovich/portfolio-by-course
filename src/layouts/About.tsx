import styled from "styled-components";
import photo from "../assets/jpg/photo/image-01-424x491.jpg";
import { SectionText } from "../components/styled/SectionText";
import { Container } from "../components/styled/Container";
import { SectionTitle } from "../components/styled/SectionTitle";
import { LinkAsButton } from "../components/styled/LinkAsButton";
import { myTheme } from "../styles/MyTheme.styled";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <SectionText>
          My name is James Adams. I’m a UI/UX & graphic designer. I believe that
          a well-designed product leads a business to success. I love learning
          how people think and behave, and I leverage research to design
          user-centered products and experiences which solve both user and
          business problems.
        </SectionText>
        <LinkAsButton>send message</LinkAsButton>

        <img alt={"portrait"} src={photo} />
      </Container>
    </StyledAbout>
  );
};

type StyledAboutProps = {};
const StyledAbout = styled.section<StyledAboutProps>`
  padding-block: ${myTheme.padding.section};
`;
