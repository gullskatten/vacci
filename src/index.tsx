import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { RouteContextProvider } from "./context/RouteContext";
import { ThemeWrapperContextProvider } from "./context/ThemeWrapperContext";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.background};
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeWrapperContextProvider>
        <RouteContextProvider>
          <GlobalStyle />
          <App />
        </RouteContextProvider>
      </ThemeWrapperContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
