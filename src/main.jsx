import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CalcReducerProvider } from "./context/calcContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalcReducerProvider>
      <App />
    </CalcReducerProvider>
  </React.StrictMode>
);
