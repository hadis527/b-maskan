/// app.js
import * as React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/GlobalStyle";
import AppRoute from "./route/index";
import { Provider } from 'react-redux';
import store  from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoute />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}
export default App;
