import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  rootElement
);
