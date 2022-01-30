import { makeAutoObservable } from "mobx";
import { IAddTodo, IItemTodo } from "../types";

class Todo {
  list = JSON.parse(localStorage.getItem("todoList") || "[]");
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo({ id, description, priority }: IAddTodo) {
    const hasMatchDescription = this.list.some(
      (item: IItemTodo) => item.description === description
    );

    if (hasMatchDescription) return alert("Задача уже существует");

    const newList = [
      ...this.list,
      {
        id,
        description,
        priority,
        isCompleted: false,
      },
    ];

    this.list = newList;
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  deleteTodo(id: string) {
    const newList = this.list.filter((item: IItemTodo) => item.id !== id);

    this.list = newList;
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  changeStatus(id: string, status: boolean) {
    const newList = this.list.map((item: IItemTodo) =>
      item.id === id ? { ...item, isCompleted: status } : item
    );

    this.list = newList;
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export default new Todo();
