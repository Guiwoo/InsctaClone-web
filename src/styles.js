import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  borderColor: "rgb(219,219,219)",
};

export const darkTheme = {
  fontColor: "Lightgray",
  bgColor: "white",
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
        font-family: "open Sans",sans-serif;
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
    }
    a{
      text-decoration: none;
    }
`;
