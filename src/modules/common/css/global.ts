import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background:  ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, html, #root {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textDark};
  }

  body, input, button {
    font-family: 'Comfortaa', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
