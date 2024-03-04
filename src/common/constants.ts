import { getResponsiveSize } from "./utils/getResponsiveSize";

export const BREAKPOINTS = {
  smallMobile: "320px",
  mobile: "576px",
  tablet: "768px",
  computer: "992px",
  desktop: "1200px",
  widescreen: "1400px",
  extraWidescreen: "1920px",
} as const;

export const SECTION_TITLE_PADDING = {
  left: getResponsiveSize(30, 65), //"clamp(30px, 3.5vw, 65px)",
  beforeWidth: getResponsiveSize(25, 50), // "clamp(25px, 3vw, 50px)",
};
