import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

export const SectionText = styled.p<{ $fontSize?: string }>`
  color: ${myTheme.font.color.medium};
  font-weight: 400;
  font-size: ${(props) => props.$fontSize || myTheme.font.size.p};

  @media ${myTheme.media.mobile} {
    text-align: center;
  }
`;
