import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { styled } from "stitches.config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "$darkBlue",
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
