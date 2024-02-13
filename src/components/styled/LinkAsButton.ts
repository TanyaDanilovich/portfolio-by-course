import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type LinkAsButtonProps = {};
export const LinkAsButton = styled.a<LinkAsButtonProps>`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.1rem 0;
  color: ${theme.colors.light};
  background-color: ${theme.colors.dark};
  height: 60px;
  min-width: 200px;
`;
