import ReactDOM from "react-dom/client";
import * as React from "react";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
