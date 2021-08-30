import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: Helvetica, Arial, sans-serif;
        height: 100%;
        background: linear-gradient(90deg, #44594b 60%, #f2f2f2 40%);
    }
`;

export const theme = {
  borderRadius: "5px",
  color: {
    disabled: "#c1c8ce",
    mainGreen: "#44594b",
    darkGrey: "#0c0c0c",
    mainWhite: "#f2f2f2",
    mainGrey: "#333333"
  },
  breakpoints: {},
};

export default GlobalStyles;
