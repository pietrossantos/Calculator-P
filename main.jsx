import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./src/components/Calculator";
import { GlobalStyle } from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Calculator />
    <GlobalStyle />
  </React.StrictMode>
);
