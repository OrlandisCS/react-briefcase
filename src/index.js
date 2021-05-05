import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";
import "./asset/css/main.scss";
import "normalize.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
