import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
    body {
        width: 100vw;
        height: 100vh;
        background-color: #F5F5F5;
        font-family: 'Poppins', sans-serif;
    }
        `;

export default GlobalStyle;
