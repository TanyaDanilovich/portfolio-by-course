import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
import {Menu, StyledMenu} from "../../components/Menu";

type props = {};
export const HeaderDesktopMenu = ({}: props) => {
  return (
    <StyledHeaderDesktopMenu>
      <Menu />
    </StyledHeaderDesktopMenu>
  );
};

type StyledHeaderDesktopMenuProps = {};
const StyledHeaderDesktopMenu = styled(StyledMenu)<StyledHeaderDesktopMenuProps>`
  @media ${theme.media.tablet} {
    display: none;
  }
`;
