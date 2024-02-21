import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/Theme.styled";
import { HeaderDesktopMenu } from "./HeaderDesktopMenu";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { BurgerButton } from "../../components/BurgerButton";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenToggler = () => setIsOpen((prev) => !prev);

  return (
    // <StyledHeader>
    <StyledOuterHeader>
      <StyledInnerHeader>
        <Container>
          <FlexWrapper justify={"space-between"} grow={"1"} align={"center"}>
            <HeaderPanel>
              <BurgerButton isOpen={isOpen} callback={isOpenToggler} />
              <Logo />
            </HeaderPanel>
            {/*<FlexWrapper align={"center"} gap={"5rem"}>*/}

            <HeaderDesktopMenu />
            <HeaderMobileMenu isOpen={isOpen} />

            {/*<FlexWrapper gap={"20px"} align={"center"}>*/}
            {/*  <LanguageSwitcher />*/}
            {/*  <ThemeSwitcher />*/}
            {/*</FlexWrapper>*/}
            {/*</FlexWrapper>*/}
          </FlexWrapper>
        </Container>
      </StyledInnerHeader>
    </StyledOuterHeader>
    // </StyledHeader>
  );
};

const StyledOuterHeader = styled.header<{}>`
  @media ${theme.media.tablet} {
    height: 60px;
    top: -1px;
  }

  background-color: ${theme.colors.lightBg};
  font-size: 20px;
  height: 140px;
  position: sticky;
  top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  // ${theme.borderRed1}
`;

const StyledInnerHeader = styled.div<{}>`
  height: 50px;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // ${theme.borderRed1}
`;

const HeaderPanel = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.media.tablet} {
    flex-grow: 1;
  }
`;
