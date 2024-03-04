import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

type ContainerProps = {};
export const Container = styled.div<ContainerProps>`
  margin-inline: auto;
  max-width: ${myTheme.breakpoints.desktop};
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  align-self: center;
  @media ${myTheme.media.desktop} {
    max-width: ${myTheme.breakpoints.computer};
  }

  @media ${myTheme.media.computer} {
    max-width: ${myTheme.breakpoints.tablet};
  }

  @media ${myTheme.media.tablet} {
    max-width: ${myTheme.breakpoints.mobile};
  }
`;
