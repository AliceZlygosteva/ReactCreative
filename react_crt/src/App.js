import React from "react";

import HeaderToDo from "./components/HeaderToDo";
import ToDoContainer from "./containers/ToDoContainer";

import "./App.scss";

function App() {
  return (
    <div>
      <HeaderToDo />
      <ToDoContainer />
    </div>
  );
}

export default App;
