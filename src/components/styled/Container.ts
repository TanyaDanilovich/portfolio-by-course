import styled from "styled-components";
import {theme} from '../../styles/Theme.styled';

type ContainerProps = {};
export const Container = styled.div<ContainerProps>`
  margin-inline: auto;
  max-width: ${theme.breakpoints.desktop};
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display:grid;
  align-self:center;
  //border: 1px solid red;
`;
