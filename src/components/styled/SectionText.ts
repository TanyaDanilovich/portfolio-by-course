import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

export const SectionText = styled.p<{}>`
  color: ${myTheme.font.color.medium};
  font-weight: 400;
  font-size: ${myTheme.font.size.p};
`;
