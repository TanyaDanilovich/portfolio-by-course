import { BREAKPOINTS, SECTION_TITLE_PADDING } from "../common/constants";
import { getResponsiveSize } from "../common/utils/getResponsiveSize";

export const myTheme = {
  colors: {
    dark: "#111235",
    light: "#fff",
    lightBg: "#fdf7f1",
    accent_1: "#ee6451",
    accent_2: "#b9e1d7",
    grayMedium: "#ABB3BA",
  },

  font: {
    color: {
      dark: "#111235",
      medium: "#535372",
      light: "#fff",
    },
    weight: {
      normal: 400,
      light: 200,
      bold: 700,
      extraBold: 900,
    },
    size: {
      h1: getResponsiveSize(30, 65),
      h2: getResponsiveSize(28.125, 65),
      h3: getResponsiveSize(30, 70),
      p: getResponsiveSize(16.875, 20),
    },
  },

  breakpoints: BREAKPOINTS,

  media: {
    smallMobile: `screen and (max-width:${BREAKPOINTS.smallMobile})`,
    mobile: `screen and (max-width:${BREAKPOINTS.mobile})`,
    tablet: `screen and (max-width:${BREAKPOINTS.tablet})`,
    computer: `screen and (max-width:${BREAKPOINTS.computer})`,
    desktop: `screen and (max-width:${BREAKPOINTS.desktop})`,
    widescreen: `screen and (max-width:${BREAKPOINTS.widescreen})`,
    extraWidescreen: `screen and (max-width:${BREAKPOINTS.extraWidescreen})`,
  },

  padding: {
    section: "clamp(50px, 10dvh, 100px)",
    sectionTitle: {
      left: SECTION_TITLE_PADDING.left,
      beforeWidth: SECTION_TITLE_PADDING.beforeWidth,
      beforeLeft: `calc(${SECTION_TITLE_PADDING.left} - ${SECTION_TITLE_PADDING.beforeWidth})`,
    },
  },
  duration: {
    long: "1s",
    middle: "0.5s",
    short: "250ms",
  },
};
