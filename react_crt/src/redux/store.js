import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export default configureStore({
  reducer: {
    todo: todoReducer,
  }
});