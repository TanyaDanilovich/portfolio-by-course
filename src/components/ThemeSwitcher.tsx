import styled from "styled-components";
import { Icon } from "./Icon";
import { useState } from "react";
import { Theme } from "../common/types/common.types";

type props = {
  // height?: string
  // width?: string
};
export const ThemeSwitcher = ({}: props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const themeToggler=() => setTheme((prev) => {
    if (prev === "light") {
      return "dark";
    } else {
      return "light";
    }
  });

  return (
    <StyledThemeSwitcher onClick={themeToggler}>
      {theme === "light" ? (
        <Icon id={"filled_moon"} width={"24"} height={"24"} />
      ) : (
        <Icon id={"filled_sun"} width={"24"} height={"24"} />
      )}
    </StyledThemeSwitcher>
  );
};

type StyledThemeSwitcherProps = {};
const StyledThemeSwitcher = styled.div<StyledThemeSwitcherProps>``;
