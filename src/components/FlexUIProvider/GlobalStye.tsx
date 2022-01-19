import { createGlobalStyle } from "styled-components";

const ThemeStyles = createGlobalStyle`
  body {
    --text-primary: #111432;
    --text-secondary: #404a59;
    --text-tertiary: #77869e;
    --text-on-bg: #fff;
    --bg-primary: #fff;
    --bg-secondary: #f5f5f9;
    --primary: #0069ff;
    --primary-shadow: rgba(0, 105, 255, 0.5);
    --secondary: #1633ff;
    --success: #15cd72;
    --success-shadow: rgba(21, 205, 114, 0.5);
    --danger: #ed4f32;
    --error: #ed4f32;
    --danger-shadow: rgba(237, 79, 50, 0.5);
    --warning: #eab02e;
    --warning-shadow: rgba(237, 180, 49, 0.5);
    --border-color: #e8eff7;
    --overlay: rgba(255, 255, 255, 0.5);
    --bad-luck-color: #ccc;

    --color-discord: #7289da;

    --code-comment: #6a737d;
    --code-keyword: #d73a49;
    --code-key: #22863a;
    --code-constant: #005cc5;
    --code-string: #032f62;
    --code-number: #005cc5;
    --logo-image: url("/images/logo.svg");

    &.dark {
      --bg-primary: #151519;
      --bg-secondary: #1c1c1f;
      --border-color: #333;
      --text-secondary: #ccc;
      --text-primary: #eee;
      --overlay: rgba(0, 0, 0, 0.5);
      --bad-luck-color: #bbb;
      --code-comment: #8b949e;
      --code-keyword: #ff7b72;
      --code-key: #7ee787;
      --code-constant: #79c0ff;
      --code-string: #a5d6ff;
      --code-number: #79c0ff;
      --logo-image: url("/images/logo-light.png");

      svg tspan {
        fill: ${({ theme }) => theme.text.onBg};
      }

    }
  }
`;

const AppStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
    color: ${({ theme }) => theme.text.primary};
    font-size: 16px;
    background: ${({ theme }) => theme.bg.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px;
    border-spacing: 0;
    color: ${({ theme }) => theme.text.secondary};
    border: 1px solid ${({ theme }) => theme.border.color};
    background: ${({ theme }) => theme.bg.primary};
  }

  td,
  th {
    padding-left: 1rem;
    padding-right: 1rem;
    &:first-child {
      padding-left: 1.5rem;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }

  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: left;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 500;
    border-top: 1px solid ${({ theme }) => theme.border.color};
    color: var(--text-primary);
  }

  tr:first-child td {
    border-top: none;
  }

  thead td,
  th {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.75rem;
    white-space: nowrap;

    font-weight: 700;
    text-align: left;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    /* color: ${({ theme }) => theme.text.primary}; */
    & + * {
      margin-top: 1rem;
    }
    & + p {
      margin-top: 0.5rem;
    }
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5 {
    margin-top: 1.5em;
  }
`;

const NormalizeStyle = createGlobalStyle`
  /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

  /* Document
    ========================================================================== */

  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
    ========================================================================== */

  /**
  * Remove the margin in all browsers.
  */

  body {
    margin: 0;
  }

  /**
  * Correct the font size and margin on 'h1' elements within 'section' and
  * 'article' contexts in Chrome, Firefox, and Safari.
  */

  /* Grouping content
    ========================================================================== */

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd 'em' font sizing in all browsers.
  */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
    ========================================================================== */

  /**
  * Remove the gray background on active links in IE 10.
  */

  a {
    background-color: transparent;
  }

  /**
  * 1. Remove the bottom border in Chrome 57-
  * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
  * Add the correct font weight in Chrome, Edge, and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd 'em' font sizing in all browsers.
  */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent 'sub' and 'sup' elements from affecting the line height in
  * all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
    ========================================================================== */

  /**
  * Remove the border on images inside links in IE 10.
  */

  img {
    border-style: none;
  }

  /* Forms
    ========================================================================== */

  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
  * Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from 'fieldset' elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    'fieldset' elements in all browsers.
  */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Remove the default vertical scrollbar in IE 10+.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
    ========================================================================== */

  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */

  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /* Misc
    ========================================================================== */

  /**
  * Add the correct display in IE 10+.
  */

  template {
    display: none;
  }

  /**
  * Add the correct display in IE 10.
  */

  [hidden] {
    display: none;
  }
`;

const GlobalStyle = () => {
  return (
    <>
      <NormalizeStyle />
      <ThemeStyles />
      <AppStyle />
    </>
  );
};

export default GlobalStyle;
