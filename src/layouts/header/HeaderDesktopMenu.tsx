import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";
import {Menu, StyledMenu} from '../../components/Menu';


type props = {};
export const HeaderDesktopMenu = ({}: props) => {
  return (
    <StyledHeaderDesktopMenu>
      <Menu />
    </StyledHeaderDesktopMenu>
  );
};

type StyledHeaderDesktopMenuProps = {};
const StyledHeaderDesktopMenu = styled(
  StyledMenu,
)<StyledHeaderDesktopMenuProps>`
  @media ${myTheme.media.tablet} {
    display: none;
  }
`;
