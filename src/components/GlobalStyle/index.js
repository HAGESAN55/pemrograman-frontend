import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins&display=swap');

    // Reset CSS and Font
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

`;

export default GlobalStyle;