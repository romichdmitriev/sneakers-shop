import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';

// components
import App from 'App';

// styles
import theme from 'styles/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
