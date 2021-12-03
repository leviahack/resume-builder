// Third party dependencies
import { Global, css } from '@emotion/react';
import { normalize } from 'styled-normalize';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  ${normalize}

  // Global styles here
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
