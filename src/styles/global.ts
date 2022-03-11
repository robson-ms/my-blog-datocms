import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   width: 100%;
   background: #f9fafc;
   overflow-x: hidden;
   
   font: 400 16px Roboto, sans-serif ;
 }

 p {
  font-family: Noto Sans, sans-serif;
 }

 input, textarea {
  font: 400 16px Roboto, sans-serif ;
 }

 :root {
  --primary: #17204b;
  --secondary: #39d6b4;
  --black: #2d292f;
  --gray-100: #4f4f4f;
  --gray-70: #696969;
  --gray-50: #a9a9a9;
  --gray-10: #f7f7f7;
  --rose: #ff7bb4;
  --rose-hover: #cf6190;
 }

`;
