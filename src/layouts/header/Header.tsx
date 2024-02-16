import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/Theme.styled";
import { HeaderDesktopMenu } from "./HeaderDesktopMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} grow={"1"} align={"center"}>
          <Logo />
          <FlexWrapper align={"center"} gap={"5rem"}>
            <HeaderDesktopMenu />
            {/*<FlexWrapper gap={"20px"} align={"center"}>*/}
            {/*  <LanguageSwitcher />*/}
            {/*  <ThemeSwitcher />*/}
            {/*</FlexWrapper>*/}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

type StyledHeaderProps = {};
const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.lightBg};
  min-height: 140px;
  font-size: 20px;
`;
