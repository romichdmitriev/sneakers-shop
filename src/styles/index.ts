import { createGlobalStyle } from 'styled-components';
import resetStyles from 'styles/reset';

const GlobalStyle = createGlobalStyle`
  ${resetStyles};
  
  body {
    background-color: ${(props) => props.theme.palette.background.paper};
  }
`;

export default GlobalStyle;
