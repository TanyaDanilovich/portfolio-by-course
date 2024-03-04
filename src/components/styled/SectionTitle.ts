import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";
import {outline} from '../../styles/mixins';

type SectionTitleProps = {};
export const SectionTitle = styled.h2<SectionTitleProps>`
  line-height: 5rem;
  font-weight: ${myTheme.font.weight.bold};
  letter-spacing: 2px;
  font-size: ${myTheme.font.size.h2};
  position: relative;
  padding-left: ${myTheme.padding.sectionTitle.left};

  // ${outline()}
  &:before {
    position: absolute;
    content: "";
    display: block;
    height: 1px;
    width: ${myTheme.padding.sectionTitle.beforeWidth};
    background-color: ${myTheme.colors.accent_1};
    left: -15px;
    transform: translateY(2.5rem) translateX(1rem);
  }

  @media ${myTheme.media.mobile} {
    &:before {
      display: none;
    }

    padding-left: 0;
    text-align: center;
  }
`;
