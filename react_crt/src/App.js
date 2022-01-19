import React from "react";

import Header from "./components/Header";
import ToDoContainer from "./containers/ToDoContainer";

import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <h2 className="title">TO-DO LIST</h2>
      <ToDoContainer />
    </div>
  );
}

export default App;
