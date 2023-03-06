import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./core/GlobalStyle";
import { theme } from "./core/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from './core/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
