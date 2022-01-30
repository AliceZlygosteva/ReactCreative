import { makeAutoObservable } from "mobx";

class TodoStore {
  list = JSON.parse(localStorage.getItem("todoList")) || [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo({ id, description, priority }) {
    const hasMatchDescription = this.list.some(
      (item) => item.description === description
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

  deleteTodo(id) {
    const newList = this.list.filter((item) => item.id !== id);

    this.list = newList;
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  changeStatus(id, status) {
    const newList = this.list.map((item) =>
    item.id === id ? { ...item, isCompleted: status } : item
  );

  this.list = newList;
  localStorage.setItem("todoList", JSON.stringify(newList));
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }
}

export default new TodoStore();
