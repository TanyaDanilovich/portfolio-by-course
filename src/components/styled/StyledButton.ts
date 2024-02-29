import {myTheme} from '../../styles/MyTheme.styled';
import styled from 'styled-components';


type StyledButtonProps = {};
export const StyledButton = styled.button<StyledButtonProps>`
  height: 60px;
  width: 200px;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  padding: 1.1rem 0;
  color: ${myTheme.colors.light};
  background-color: ${myTheme.colors.dark};
  cursor: pointer;
`;
