import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/*import { Provider } from "react-redux";
import store from ""./redux/store";
import { Reducer } from ""./redux/reducer";
import { createStore } from "redux";
import $ from "jquery";*/

/*const store = createStore(Reducer);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*<Provider store={store}>
    <App />
  </Provider>*/
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
