import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type ContainerProps = {};
export const Container = styled.div<ContainerProps>`
  max-width: ${theme.breakpoint.xl};
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  //border: 1px solid red;
`;
