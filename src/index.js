import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DisableComponentProvider } from "./services/context";
import { StyleProvider } from "./services/context";
import { PostagensProvider } from "./services/context/PostContext";
ReactDOM.render(
  <React.StrictMode>
    <DisableComponentProvider>
    <PostagensProvider>
      <StyleProvider>
        <App />
      </StyleProvider>
      </PostagensProvider>
    </DisableComponentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
