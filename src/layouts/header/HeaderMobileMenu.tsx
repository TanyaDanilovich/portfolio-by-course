import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.styled";
import {Menu, StyledMenu} from '../../components/Menu';


type props = { isOpen: boolean };
export const HeaderMobileMenu = ({ isOpen }: props) => {
  return (
    <StyledHeaderMobileMenu isOpen={isOpen}>
      <Menu />
    </StyledHeaderMobileMenu>
  );
};

type StyledHeaderMobileMenuProps = { isOpen: boolean };
const StyledHeaderMobileMenu = styled(StyledMenu)<StyledHeaderMobileMenuProps>`
  display: none !important;

  @media ${theme.media.tablet} {
    display: block !important;
    width: 40vw;
    padding: 3rem;
  }

  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.lightBg};
  z-index: 25;
  font-size: 2rem;
  transform: translateX(-200%);
  transition: 1s;

  ${(props) =>
          props.isOpen &&
          css<{ isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateX(0);
          `}
  ul {
    padding-top: 30vw;
    flex-direction: column;
    gap: 40px;
  }
`;
