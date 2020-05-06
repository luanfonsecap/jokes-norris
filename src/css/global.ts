import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #DFE6E9;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, html, #root {
    font-size: 16px;
  }

  body, input, button {
    font-family: 'Comfortaa', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
