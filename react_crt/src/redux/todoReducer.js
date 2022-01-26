import { createSlice } from "@reduxjs/toolkit";

const initialList = JSON.parse(localStorage.getItem("todoList")) || [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: initialList,
    isLoading: true,
  },
  reducers: {
    addTodo(state, action) {
      const {
        payload: { id, description, priority },
      } = action;

      const hasMatchDescription = state.list.some(
        (item) => item.description === description
      );

      if (hasMatchDescription) return alert("Задача уже существует");

      const newList = [
        ...state.list,
        {
          id,
          description,
          priority,
          isCompleted: false,
        },
      ];

      state.list = newList;
      localStorage.setItem("todoList", JSON.stringify(newList));
    },
    deleteTodo(state, action) {
      const { payload: id } = action;

      const newList = state.list.filter((item) => item.id !== id);

      state.list = newList;
      localStorage.setItem("todoList", JSON.stringify(newList));
    },
    changeStatus(state, action) {
      const {
        payload: { id, status },
      } = action;

      const newList = state.list.map((item) =>
        item.id === id ? { ...item, isCompleted: status } : item
      );

      state.list = newList;
      localStorage.setItem("todoList", JSON.stringify(newList));
    },
    setIsLoading(state, action) {
      const {
        payload: { isLoading },
      } = action;
      
      state.isLoading = isLoading;
    },
  },
});

export const { addTodo, deleteTodo, changeStatus, setIsLoading } =
  todoSlice.actions;

export default todoSlice.reducer;
