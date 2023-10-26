import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./components/Redux/store.js";

import { Provider } from "react-redux";
import { update } from "./components/Redux/userSlice.js";

window.addEventListener("resize", () => {
  store.dispatch(
    update({ size: window.innerWidth})
  );
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
