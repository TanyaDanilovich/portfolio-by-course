import { createGlobalStyle } from "styled-components";
import { myTheme } from "./MyTheme.styled";

export const GlobalStyle = createGlobalStyle`
  :root {

    /* Fonts */
    --fonts-body: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    --fonts-heading: Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif;
    --fonts-monospace: Fira Code, Menlo, monospace;
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
    font-size: 16px;
  }

  h1, h2, h3 {
    font-family: var(--fonts-heading);
    line-height: 1.2;
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
  p {
    line-height: 200%;
  }
`;
