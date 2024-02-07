import styled from "styled-components";

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
        <img alt={'photo'} src={''} />
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
