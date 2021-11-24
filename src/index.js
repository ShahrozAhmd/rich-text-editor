import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import  ContextProvider  from "Context/Store/store";
import {state} from 'Context/State/state'

ReactDOM.render(
  <React.StrictMode initialState={state} 
  // reducer = {}
  >
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
