import {createGlobalStyle} from 'styled-components';
import theme from '../utils/theme';

export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1 rem = 10px

  @media only screen and (max-width: ${theme.breakpoints.bpLargest}) {
    font-size: 50%; // 8px
  }
}

body {
  font-family: ${theme.fonts.fontPrimary};
  color: ${theme.colors.greyDark2};
  font-weight: 300;
  line-height: 1.6;
}

`;