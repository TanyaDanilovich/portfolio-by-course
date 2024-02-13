import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type SectionSecondaryTitleProps = {
  // height?: string
  // width?: string
};
export const SectionSecondaryTitle = styled.h3<SectionSecondaryTitleProps>`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
  margin-top: 1rem;
  //cursor:alias;

`;
