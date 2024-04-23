import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material";
import { store } from "./store/store";
import { darkTheme } from "./components/theme/theme";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <Toaster position="top-center" />
      <App />
    </Provider>
  </ThemeProvider>
);
