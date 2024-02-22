import { BREAKPOINTS } from "../components/styled/constants";

export const myTheme = {
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
  border: {
    red_1: "border: 1px solid red",
    green_1: "border: 1px solid green",
    red_5: "border: 5px solid red",
    green_5: "border: 5px solid green",
  },
  padding: {
    section: "clamp(50px, 10dvh, 100px)",
  },
  duration: {
    long: "1s",
    middle: "0.5s",
    short: "250ms",
  },
};
