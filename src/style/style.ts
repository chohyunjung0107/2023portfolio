import styled, { createGlobalStyle } from "styled-components";

export const MakeIntroContents = styled.div`
    width: 100%;
    height: 800px;
    border: 1px solid #ccc;

    h1 {
        width: 100%;
        text-aling: end;
    }
`;

/**
 * global style
 */

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;
