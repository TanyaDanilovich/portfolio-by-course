import styled, { css } from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";
import { Menu, StyledMenu } from "../../components/Menu";

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

  @media ${myTheme.media.tablet} {
    display: block !important;
    width: 40vw;
    padding: 3rem;
  }

  @media ${myTheme.media.mobile} {
    width: 80vw;
  }

  @media ${myTheme.media.smallMobile} {
    width: 100vw;
  }

  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${myTheme.colors.lightBg};
  z-index: 25;
  font-size: 2rem;
  transform: translateX(-200%);
  transition: ${myTheme.duration.middle};

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(0);
      transition: ${myTheme.duration.middle};
    `}
  ul {
    padding-top: 30vw;
    flex-direction: column;
    gap: 40px;
  }
`;
