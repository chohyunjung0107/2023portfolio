import styled, { createGlobalStyle } from "styled-components";

export const MakeIntroContents = styled.div<{ ht?: boolean }>`
    width: 100%;
    border: 1px solid #ccc;
    background: #212121;

    height: ${(props) => (props.ht ? "800px" : "1600px")};

    color: #f8f6f1;
    h1 {
        width: 100%;
        text-align: right;
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
