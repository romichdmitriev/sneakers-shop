import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
