import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PreviewPage from "./components/PreviewPage/PreviewPage";
import ToDoContainer from "./containers/ToDoContainer";

import store from "./redux/store";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PreviewPage />} />
            <Route path="todo" element={<ToDoContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
