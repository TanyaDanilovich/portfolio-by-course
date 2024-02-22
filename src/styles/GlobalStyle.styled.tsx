import { createGlobalStyle } from "styled-components";
import { myTheme } from "./MyTheme.styled";

export const GlobalStyle = createGlobalStyle`
  :root {


    /* Animations */
    --animation-duration: 0.1s;
    --animation-timing: ease;

    /* Fonts */
    --fonts-body: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    --fonts-heading: Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif;
    --fonts-monospace: Fira Code, Menlo, monospace;


    /* Fonts: Weight */
    --fw-normal: 400;
    --fw-light: 200;
    --fw-bold: 700;
    --fw-extra-bold: 900;

    --fs-400: 0.9275rem;
    --fs-500: 1.25rem;
    --fs-600: 1.625rem;
    --fs-900: 2.5rem;


    --fs-h1: clamp(2rem, 3vw + 1rem, 3.625rem);
    --fs-h2: clamp(1.875rem, 3vw + 1rem, 4.0625rem);
    --fs-h3: clamp(1.25rem, 1vw + 1rem, 2rem);


    /* Fonts: Line Height */
    --fonts-line-body: 1.5;
    --fonts-line-heading: 1.25;

    /* padding */
    
    /* Borders */
    --borders-radius: 0;
    --borders-color: rgba(34, 36, 38, 0.15);
    --borders-strong: rgba(34, 36, 38, 0.22);
    --borders-internal: rgba(34, 36, 38, 0.1);
    --borders-selected: rgba(34, 36, 38, 0.35);
    --borders-selected-strong: rgba(34, 36, 38, 0.5);
    --borders-disabled: rgba(34, 36, 38, 0.5);
  }


  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body {
    //font-family: 'Open Sans', sans-serif;
    //font-family: 'Poppins', sans-serif;
    margin: 0;
    font-family: var(--fonts-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${myTheme.colors.dark};

  }

  h1, h2, h3 {
    font-family: var(--fonts-heading);
    line-height: 1.2;
  }

  h1 {
    font-size: var(--fs-h1);
  }

  h2 {
    font-size: var(--fs-h2);
  }

  h3 {
    font-size: var(--fs-h3);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background-color: unset;
  }
`;
