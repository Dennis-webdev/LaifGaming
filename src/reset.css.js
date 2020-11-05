// @flow
import { createGlobalStyle } from 'styled-components';

// $FlowIssue
export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`;