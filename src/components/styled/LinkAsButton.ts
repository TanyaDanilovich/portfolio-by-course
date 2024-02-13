import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type LinkAsButtonProps = {};
export const LinkAsButton = styled.a<LinkAsButtonProps>`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.1rem 1.7rem;
  color: ${theme.colors.light};
  background-color: ${theme.colors.dark};
`;
