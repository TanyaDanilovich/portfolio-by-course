import styled from "styled-components";
import photo from "../assets/jpg/photo/person-01-630x866.jpg";
import { Container } from "../components/styled/Container";
import { theme } from "../styles/Theme.styled";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { LinkAsButton } from "../components/styled/LinkAsButton";
import { Icon } from "../components/Icon";
import arrowSprite from "../assets/svg/arrowsSprite.svg";

export const Intro = () => {
  return (
    <StyledIntro>
      <Container>
        <FlexWrapper justify={"space-around"}>
          <IntroContentItem>
            <span>Hi!</span>
            <IntroTitle>I'm a web developer</IntroTitle>
            <p>ready to work on the next big project for your business</p>
            <LinkAsButton>Get in Touch</LinkAsButton>
          </IntroContentItem>

          <IntroContentItem>
            <img alt={"photo"} src={photo} />
            <IntroLink href={"#"}>
              <Icon id={"right"} sprite={arrowSprite} fill={"white"} />
            </IntroLink>
          </IntroContentItem>
        </FlexWrapper>
      </Container>
    </StyledIntro>
  );
};

type StyledIntroProps = {};
const StyledIntro = styled.section<StyledIntroProps>`
  background-color: ${theme.colors.lightBg};
  padding: 100px 0;
`;

type IntroTitleProps = {};
const IntroTitle = styled.h1<IntroTitleProps>`
  display: inline-block;

  font-weight: 900;
`;

type IntroContentItemProps = {};
const IntroContentItem = styled.div<IntroContentItemProps>`
  max-width: 40%;
  object-fit: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
  }

  &:last-child::before {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    background-color: ${theme.colors.accent_1};
    right: 0;
    top: 0;
  }

  a {
    margin-top: 4rem;
  }

  p {
    margin-left: 5rem;
  }
`;

type IntroLinkProps = {};
const IntroLink = styled.a<IntroLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: ${theme.colors.accent_2};
  left: 0;
  bottom: 0;
`;
