import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat", sans-serif;
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }

  img{
    display: block;
    width: 100%;
  }
`
export default GlobalStyle