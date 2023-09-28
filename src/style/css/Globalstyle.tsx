import { createGlobalStyle } from "styled-components";

import Theme from "../Theme";

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
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif; 
    font-size: 14px;
    font-weight: 500;
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
    list-style-type: none;
  }
  table{
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    border-radius: 10px;
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
    h1, h2, h3, h4, h5, h6, p{
    margin:0 0 10px 0;
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
    font-size:16px;
  }
  h6{
    font-size:14px;
  }
  .heading-small-bold{
    font-size: ${Theme.small};
    font-weight: bold;
  }
  .text-white{
    color: white;
  }
  .font-bold{
    font-weight: bold;
  }
  .font-bold-500{
    font-weight: 500;
  }
  .font-normal{
    font-weight: 400;
  }
  .small-text-normal{
    font-size:14px;
    font-weight: 400;
  }
  .text-center {
    text-align: center !important;
  }
  .text-right {
    text-align: right !important;
  }  
  .hr-line{
    height:1px;
    &.test{
      background: ${Theme.darkRed};
    }
  }
  .border-radius-5{
    border-radius:5px;
  }
  .border-radius-top-left-5{
    border-top-left-radius:5px;
  }
  .border-radius-top-right-5{
    border-top-right-radius:5px;
  }
  .border-radius-bottom-left-5{
    border-bottom-left-radius:5px;
  }    
  .border-radius-bottom-right-5{
    border-bottom-right-radius:5px;
  }

  .border-radius-10{
    border-radius:10px;
  }
  .border-radius-top-left-10{
    border-top-left-radius:10px;
  }
  .border-radius-top-right-10{
    border-top-right-radius:10px;
  }
  .border-radius-bottom-left-10{
    border-bottom-left-radius:10px;
  }    
  .border-radius-bottom-right-10{
    border-bottom-right-radius:10px;
  }  
}  
`;
export default BodyGlobalStyle;
