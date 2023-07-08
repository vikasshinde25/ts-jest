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
  p{
    margin:0;
  }
  body{
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif; 
    font-size:14px;
  }
  .cursor{
    cursor: pointer;
  }
  img {
    width: 100%;
    height: auto;
  }
  ul{
    margin:0;
    padding:0;
  }
  .w-100{
    width: 100%;
  }
  .h-100{
    height: 100%;
  }
  .disabled {
    opacity: 0.6;
    cursor: not-allowed !important;
    pointer-events: none !important;
  }
  .flex-content-center {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  .p-20{
    padding: 20px;
  }
  
  h1{
    font-size:32px;
  }
  h2{
    font-size:28px;
  }  
  h3{
    font-size:24px;
  }
  h4{
    font-size:20px;
  }
  h5{
    font-size:18px;
  }
  h6{
    font-size:16px;
  }        
}  
`;
export default BodyGlobalStyle;
