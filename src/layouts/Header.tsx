import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import styled from "styled-components";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledHeaderWrapper flexGrow={1} gap={"70px"}>
        <Menu />
        <StyledHeaderWrapper gap={"20px"}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </StyledHeaderWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

type StyledHeaderProps = {
  // height?: string
  // width?: string
};
const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
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
