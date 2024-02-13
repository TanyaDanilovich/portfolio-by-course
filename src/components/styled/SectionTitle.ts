import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type SectionTitleProps = {};
export const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${theme.colors.dark}
  position: relative;
  padding-left: 65px;
  //outline: 2px solid red;

  &:before {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 50px;
    background-color: ${theme.colors.accent_1};
    left: 0;
    transform: translateY(2.5rem) translateX(1rem);

  }
`;
