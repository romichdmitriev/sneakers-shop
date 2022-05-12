import { createTheme } from '@mui/material';

export const pallete = {
  black: '#000',
  blue: {
    100: '#0A1734',
    200: '#04092B',
  },
  grey: {
    200: '#F5F5F6',
    300: '#DBDBE3',
    400: '#9A9EB7',
  },
  pink: '#FF64AA',
  purple: '#594CA9',
  white: '#fff',
};

const theme = createTheme({
  palette: {
    background: {
      default: pallete.white,
      paper: pallete.grey[200],
    },
    primary: {
      main: pallete.purple,
      contrastText: pallete.white,
      dark: pallete.black,
    },
    secondary: {
      main: pallete.pink,
      contrastText: pallete.white,
    },
    text: {
      primary: pallete.blue[100],
      secondary: pallete.blue[200],
      disabled: pallete.grey[400],
    },
    divider: pallete.grey[300],
  },
  typography: {
    fontFamily: '"Roboto Condensed", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.2,
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.15,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 2,
      fontWeight: 700,
    },
    button: {
      fontSize: '0.875rem',
      lineHeight: 1.15,
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 900,
      xl: 1200,
      xxl: 1536,
    },
  },
});

export default theme;
