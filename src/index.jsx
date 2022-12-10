import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProviderWrapper>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <App />
      </LocalizationProvider>
    </AuthProviderWrapper>
  </Router>
);
