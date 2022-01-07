import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/icons.css"
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from "./reducers";

export const store = createStore(
  reducers, //todos los reducers
 composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
