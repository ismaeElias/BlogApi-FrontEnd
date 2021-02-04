import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisableComponentProvider } from "./services/context";
import { StyleProvider } from "./services/context";
ReactDOM.render(
  <React.StrictMode>
    <DisableComponentProvider>
      <StyleProvider>
        <App />
      </StyleProvider>
    </DisableComponentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
