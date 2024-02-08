import styled from "styled-components";
import photo from "../assets/jpg/person-01-630x866.jpg";

export const About = () => {
  return (
    <StyledAbout>
      <div>
        <StyledAboutTitle>About me</StyledAboutTitle>
        <p>
          My name is James Adams. I’m a UI/UX & graphic designer. I believe that
          a well-designed product leads a business to success. I love learning
          how people think and behave, and I leverage research to design
          user-centered products and experiences which solve both user and
          business problems.
        </p>
        <a>send message</a>
      </div>

      <div>
        <img alt={"portrait"} src={photo} />
      </div>
    </StyledAbout>
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
