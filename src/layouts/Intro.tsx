import styled from "styled-components";
import photo from "../assets/jpg/photo/person-01-630x866.jpg";

export const Intro = () => {
  return (
    <StyledIntro>
      <div>
        <span>Hi!</span>
        <StyledIntroTitle>I'm a designer</StyledIntroTitle>
        <p>ready to work on the next big project for your business</p>
        <a>Get in Touch</a>
      </div>

      <div>
        <img alt={"photo"} src={photo} />
      </div>
    </StyledIntro>
  );
};

type StyledIntroProps = {
  // height?: string
  // width?: string
};
const StyledIntro = styled.section<StyledIntroProps>``;

type StyledIntroTitleProps = {
  // height?: string
  // width?: string
};
const StyledIntroTitle = styled.h1<StyledIntroTitleProps>``;
