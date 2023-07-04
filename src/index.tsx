import React from "react";

import ReactDOM from "react-dom/client";
// import dotenv from "dotenv";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import "./style/css/bootstrapGrid.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

// dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const isLoggedIn = !!localStorage.getItem("token");
console.log("isLoggedIn", isLoggedIn);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
