import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Circular";
    font-weight: 500;
    src: url("./assets/fonts/Circular/CircularStd-Medium.otf");
    font-display: swap;
  }

  @font-face {
    font-family: "Gordita";
    font-weight: 500;
    src: url("../../assets/fonts/Gordita/Gordita-Regular.otf");
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Gordita", "sans-serif";
  }
`;
