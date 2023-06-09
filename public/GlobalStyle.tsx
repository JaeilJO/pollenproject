import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    margin: 0;
    padding: 0;
    font-family: "Nanum Gothic";
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
