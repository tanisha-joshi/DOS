import React from "react";
import ReactDOM from "react-dom/client";

import { DataverseContextProvider } from "@dataverse/hooks";

import App from "./App";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataverseContextProvider>
  <App />
</DataverseContextProvider>
);
