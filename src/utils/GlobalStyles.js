import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html, body {
        font-family: Helvetica, Arial, sans-serif;
    }
`;

// primary: '#3a1d2b',
// primaryLight: '#654554',
// primaryDark: '#170000',

export const theme = {
  borderRadius: "5px",
  color: {
    text: "#21292c",
    primary: "#57aaf4",
    primaryDark: "#3377b3",
    secondary: "#9cdfa1",
    warning: "#ffe59a",
    warningDark: "#f9c11e",
    disabled: "#c1c8ce",
    delete: "red"
  },
  breakpoints: {},
};

export default GlobalStyles;
