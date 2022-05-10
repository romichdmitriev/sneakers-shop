import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// components
import AppRouter from 'service/router/Router';

// styles
import theme from 'styles/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRouter />

            <CssBaseline />
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
