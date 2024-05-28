import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat", sans-serif;
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }

  body, article, div, h2, span, p,button{
    margin: 0;
    padding: 0;
  }
  
  span{
    display: block;
  }
`
export default GlobalStyle