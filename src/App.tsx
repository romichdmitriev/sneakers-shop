import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// service
import AppRouter from 'service/router/Router';

// styles
import theme from 'styles/theme/theme';

function App() {
  return (
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
  );
}

export default App;
