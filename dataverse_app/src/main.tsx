import React from "react";
import ReactDOM from "react-dom/client";

import { DataverseContextProvider } from "@dataverse/hooks";

import App from "./App";

import "./index.css";
{/* <DataverseContextProvider> */}
// </DataverseContextProvider>,

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
