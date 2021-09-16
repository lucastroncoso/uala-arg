import { createGlobalStyle } from 'styled-components';
import theme from './theme/theme';
import { vh } from './styles/helpers/vh';

const GlobalStyle = createGlobalStyle`
  :root {
    --x-offset: 0;
    --y-offset: 0;

    .plyr__volume {
      width: 36px;
      min-width: 36px;
    }

    .plyr--video {
      width: 100%;
      height: auto;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: rgba(255, 201, 176, .6); }

  body {
    font-family: ${theme.fonts.publicSans}, sans-serif;
    color: ${theme.color.black};
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: normal;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  input,
  select {
    border: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
  }

  *:focus {
    outline: 1px solid ${theme.color.black};
  }

  .scroll-content {
    @media (max-width: 1023px) {
      transform: unset !important;
    }
  }

  .full-bg-black {
    position: fixed;
    top: 0;
    width: 100%;
    height: ${vh(100)};
    background-color: black;
  }
`;

export default GlobalStyle;
