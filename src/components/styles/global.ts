import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: 'Noto Serif', noto-serif;

      }
   #root{
      margin: 0 auto;
      --primary: #efb6b2;
      --secondary: #4e4e4e;
      --error: #ff4a4a;
   }
`;
