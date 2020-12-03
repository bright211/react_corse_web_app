import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import Layout from "../src/components/atoms/Layout";
import { GlobalStyles, Theme } from "./styles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
