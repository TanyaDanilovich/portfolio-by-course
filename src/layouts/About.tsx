import styled from "styled-components";
import photo from "../assets/jpg/photo/image-01-424x491.jpg";
import { SectionText } from "../components/styled/SectionText";
import { Container } from "../components/styled/Container";
import { SectionTitle } from "../components/styled/SectionTitle";
import { LinkAsButton } from "../components/styled/LinkAsButton";
import { myTheme } from "../styles/MyTheme.styled";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { getResponsiveFontSize } from "../common/utils/getResponsiveFontSize";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper direction={"row-reverse"}>
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
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section<{}>`
  padding-block: ${myTheme.padding.section};
`;

const FlexItem = styled.div<{ $fontSize?: string }>`
  &:first-child {
  }

  &:last-child {
    img {
      max-width: 90%;
    }
  }

  width: 50%;

  p {
    line-height: 200%;
    font-size: ${(props) => props.$fontSize || myTheme.font.size.p};
  }

  p:first-of-type {
    margin-block-start: 3rem;
  }

  p ~ p {
    margin-block-start: 1rem;
    margin-block-end: 3rem;
  }
`;
