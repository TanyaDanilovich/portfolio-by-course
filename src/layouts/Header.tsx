import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
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