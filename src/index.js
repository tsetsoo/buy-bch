import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import IntlWrapper from "./components/intl-wrapper/intl-wrapper.component";

ReactDOM.render(
  <IntlWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlWrapper>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
