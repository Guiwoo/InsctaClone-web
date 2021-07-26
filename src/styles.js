import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38,38,38",
  borderColor: "rgb(219,219,219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      box-sizing: border-box;
    }
    input{
      all: unset;
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color:${(props) => props.theme.fontColor};
        font-family: "open Sans",sans-serif;
        font-size: 14px;
    }
    a{
      text-decoration: none;
    }
`;
