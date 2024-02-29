import styled from "styled-components";
import photo from "../assets/jpg/photo/image-01-424x491.jpg";
import { SectionText } from "../components/styled/SectionText";
import { Container } from "../components/styled/Container";
import { SectionTitle } from "../components/styled/SectionTitle";
import { LinkAsButton } from "../components/styled/LinkAsButton";
import { myTheme } from "../styles/MyTheme.styled";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { getResponsiveSize } from "../common/utils/getResponsiveSize";

export const About = () => {
  // const flexMediaQueries: FlexMediaProp = {
  //     breakpointRequest: "mobile",
  //     newProp: { direction: "column-reverse" },
  // };

  return (
    <StyledAbout>
      <Container>
        <AboutFlexWrapper>
          <FlexItem>
            <SectionTitle>About me</SectionTitle>
            <SectionText>
              My name is James Adams. I’m a UI/UX & graphic designer. I believe
              that a well-designed product leads a business to success.
            </SectionText>
            <SectionText>
              I love learning how people think and behave, and I leverage
              research to design user-centered products and experiences which
              solve both user and business problems.
            </SectionText>
            <LinkAsButton>send message</LinkAsButton>
          </FlexItem>

          <FlexItem>
            <img alt={"portrait"} src={photo} />
          </FlexItem>
        </AboutFlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section<{}>`
  padding-block: ${getResponsiveSize(50, 100, 400)};
`;






const AboutFlexWrapper = styled.div<{}>`
  @media ${myTheme.media.mobile} {
    flex-direction: column-reverse;
  }

  display: flex;
  flex-direction: row-reverse;
  height: 100%;


`;

const FlexItem = styled.div<{}>`
  @media ${myTheme.media.mobile} {
    width: 100%;
    text-align: center;
  }

  width: 50%;

  &:last-child {
    img {
      max-width: 90%;
    }
  }

  p:first-of-type {
    margin-block-start: ${getResponsiveSize(16, 16 * 3)};
  }

  p ~ p {
    margin-block-start: 1rem;
    margin-block-end: 3rem;
  }

`;

