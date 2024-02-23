import styled from "styled-components";
import photo from "../assets/jpg/photo/person-01-630x866.jpg";
import { Container } from "../components/styled/Container";
import { myTheme } from "../styles/MyTheme.styled";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { LinkAsButton } from "../components/styled/LinkAsButton";
import { Icon } from "../components/Icon";
import arrowSprite from "../assets/svg/arrowsSprite.svg";

export const Intro = () => {
  return (
    <StyledIntro>
      <Container>
        <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"2rem"}>
          <IntroContentItem>
            <div>
              <span>Hi!</span>
              <IntroTitle>I'm a&nbsp;web&nbsp;developer</IntroTitle>
            </div>
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

const StyledIntro = styled.section<{}>`
  background-color: ${myTheme.colors.lightBg};

  @media ${myTheme.media.tablet} {
    padding-block: ${myTheme.padding.section};
  }
`;

const IntroTitle = styled.h1<{}>`
  display: inline;
  padding-left: 1rem;
  font-weight: 900;
  font-size: ${myTheme.font.size.h1};
`;

const IntroContentItem = styled.div<{}>`
  &:first-child {
    & div {
      white-space: break-spaces;
    }

    @media ${myTheme.media.tablet} {
      width: 100%;
      align-items: center;
      p {
        margin-inline: 2rem;
        text-align: center;
      }

      & div {
        text-align: center;
      }
    }
  }

  &:last-child {
    @media ${myTheme.media.tablet} {
      margin-inline: 2rem;
      width: 50%;
    }
  }

  width: 40%;
  object-fit: cover;
  display: flex;
  align-items: start;
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
    background-color: ${myTheme.colors.accent_1};
    right: 0;
    top: 0;
  }

  p {
    margin-left: max(5vw, 2rem);
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: ${myTheme.font.size.p};
  }

  span {
    font-size: ${myTheme.font.size.h1};
  }
`;

const IntroLink = styled.a<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: min(30%, 90px);
  //width: clamp(30%, 5vw, 90px);
  aspect-ratio: 1/1;
  background-color: ${myTheme.colors.accent_2};
  left: 0;
  bottom: 0;
`;
