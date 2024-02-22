import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

type SectionTitleProps = {};
export const SectionTitle = styled.h2<SectionTitleProps>`
  line-height: 5rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${myTheme.colors.dark};
  position: relative;
  padding-left: 65px;
  //outline: 2px solid red;

  &:before {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 50px;
    background-color: ${myTheme.colors.accent_1};
    left: 0;
    transform: translateY(2.5rem) translateX(1rem);

  }
`;
