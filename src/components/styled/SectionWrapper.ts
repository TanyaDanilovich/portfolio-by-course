import styled from "styled-components";
import {theme} from '../../styles/Theme.styled';

type SectionWrapperProps = {
  // height?: string
  // width?: string
};
export const SectionWrapper = styled.div<SectionWrapperProps>`
  max-width: ${theme.breakpoint.xl};
  margin: 0 auto;
`;
