/// app.js
import * as React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/GlobalStyle";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <h1>سلام</h1>
        <GlobalStyle />
      </ThemeProvider>
  )
}
export default App;
