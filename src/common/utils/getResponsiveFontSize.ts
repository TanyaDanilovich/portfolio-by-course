//https://msiter.ru/articles/sovremennaya-otzyvchivaya-tipografika-pri-pomoschi-css-clamp

import { getRootFontSize } from "./getRootFontSize";

export const getResponsiveFontSize = (
  minFontSize: number = 36,
  minViewportWidth: number = 600,
  maxFontSize: number = 52,
  maxViewportWidth: number = 1400,
): string => {
  const rem = getRootFontSize();

  const v =
    (100 * (maxFontSize - minFontSize)) / (maxViewportWidth - minViewportWidth);

  const r =
    (minViewportWidth * maxFontSize - maxViewportWidth * minFontSize) /
    (minViewportWidth - maxViewportWidth);

  const minFontSizeInRem = minFontSize / rem;
  const relativeValueInRem = r / rem;
  const maxFontSizeInRem = maxFontSize / rem;

  return `clamp(${minFontSizeInRem}rem, ${v}vw + ${relativeValueInRem}rem, ${maxFontSizeInRem}rem)`;
};
