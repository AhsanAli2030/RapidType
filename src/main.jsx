import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import counterStore from "./Store/mainStore.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={counterStore}>
    <App />
  </Provider>

  
);

