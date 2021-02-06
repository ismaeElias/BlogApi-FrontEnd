import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    input {
        border: none;
    }
    button{
        border : none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: "color 9999s ease-out, background-color 9999s ease-out";
        transition-delay: 9999s;
    }
`;

export default GlobalStyles;
