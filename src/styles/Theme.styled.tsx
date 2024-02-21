import { BREAKPOINTS } from "../components/styled/constants";

export const theme = {
  colors: {
    dark: "#111235",
    light: "#fff",
    lightBg: "#fdf7f1",
    accent_1: "#ee6451",
    accent_2: "#b9e1d7",
    grayMedium: "#ABB3BA",
  },
  typography: {
    dark: "#111235",
    light: "#fff",
  },

  breakpoints: BREAKPOINTS,

  media: {
    smallMobile: `screen and (max-width:${BREAKPOINTS["small-mobile"]})`,
    mobile: `screen and (max-width:${BREAKPOINTS["mobile"]})`,
    tablet: `screen and (max-width:${BREAKPOINTS["tablet"]})`,
    computer: `screen and (max-width:${BREAKPOINTS["computer"]})`,
    desktop: `screen and (max-width:${BREAKPOINTS["desktop"]})`,
    widescreen: `screen and (max-width:${BREAKPOINTS["widescreen"]})`,
    extraWidescreen: `screen and (max-width:${BREAKPOINTS["extra-widescreen"]})`,
  },
  borderRed1: "border: 1px solid red",
  borderGreen1: "border: 1px solid green",
};
