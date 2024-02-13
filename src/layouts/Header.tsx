import { Menu } from "../components/Menu";
import styled from "styled-components";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Container } from "../components/styled/Container";
import { FlexWrapper } from "../components/styled/FlexWrapper";
import { Logo } from "../components/Logo";
import { theme } from "../styles/Theme.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} grow={"1"}>
          <Logo />
          <FlexWrapper align={"center"} gap={"5rem"}>
            <Menu />
            <FlexWrapper gap={"20px"} align={"center"}>
              <LanguageSwitcher />
              <ThemeSwitcher />
            </FlexWrapper>
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
  align-items:center;
  background-color: ${theme.colors.lightBg};
  min-height: 140px;
  font-size: 20px;
`;

type StyledHeaderWrapperProps = {
  flexGrow?: number;
  gap?: string;
};
const StyledHeaderWrapper = styled.div<StyledHeaderWrapperProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: ${(props) => props.flexGrow};
  gap: ${(props) => props.gap};
`;
