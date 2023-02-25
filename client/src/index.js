import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './Theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <App />
      </CssBaseline>
      </StyledEngineProvider>
    </ThemeProvider>
  </BrowserRouter>
);
