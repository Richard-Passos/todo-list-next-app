import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: .5s
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 2000px) {
      font-size: 87.5%;
    }
    @media screen and (min-width: 2500px) {
      font-size: 100%;
    }
  }
`;

export default GlobalStyle;
