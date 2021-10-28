import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme } from '@mui/material/styles';
import darkTheme from './assets/themes/darkTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(darkTheme)}>
      <CssBaseline />
      <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

