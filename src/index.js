import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import  ContextProvider  from "Context/Store/store";
import {state} from 'Context/State/state'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from 'Theme/theme'

ReactDOM.render(
  <React.StrictMode initialState={state} 
  // reducer = {}
  >
    <ContextProvider>
      <Router>
      <ThemeProvider  theme={theme}>
        <App />
        </ThemeProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
