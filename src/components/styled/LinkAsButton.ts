import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

type LinkAsButtonProps = {};
export const LinkAsButton = styled.a<LinkAsButtonProps>`
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.1rem 0;
  color: ${myTheme.colors.light};
  background-color: ${myTheme.colors.dark};
  height: 60px;
  min-width: 200px;
`;
