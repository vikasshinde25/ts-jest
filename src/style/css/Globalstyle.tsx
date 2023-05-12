import { createGlobalStyle } from "styled-components";

const BodyGlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  #root {
    height: 100%;
  }

    body{
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif; 
        font-size:14px;
    }
`;
export default BodyGlobalStyle;
