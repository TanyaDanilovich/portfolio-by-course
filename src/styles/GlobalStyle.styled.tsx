import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme.styled';

export const GlobalStyle =createGlobalStyle`
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
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:${theme.colors.dark}
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
`
