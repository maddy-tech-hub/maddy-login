import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');

  html,
  body {
    min-height: 100%;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at top left, rgba(17, 126, 255, 0.12), transparent 28%),
      linear-gradient(180deg, #f4f7fb 0%, #eef3fb 100%);
    color: #0d1b33;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    font-size: 15px;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
    letter-spacing: -0.02em;
  }
`;
