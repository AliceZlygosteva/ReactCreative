import React from "react";
import { v4 as uuidv4 } from "uuid";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

import styles from "./ToDoContainer.module.scss";

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isShow: false,
      filter: "all",
    };

    this.changeStatus = this.changeStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    const listFromStorage = JSON.parse(localStorage.getItem("todoList")) || [];

    this.setState({ list: listFromStorage });
  }

  saveList(newList) {
    this.setState({ list: newList });
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  createNewItem(prevState, description, priority) {
    const { list } = prevState;

    const hasMatchDescription = list.some(
      (item) => item.description === description
    );

    if (hasMatchDescription) return alert("Задача уже существует");

    return [
      ...list,
      { id: uuidv4(), description, priority, isCompleted: false },
    ];
  }

  changeStatus(status, id) {
    const { list } = this.state;

    const newList = list.map((item) =>
      item.id === id ? { ...item, isCompleted: status } : item
    );

    this.saveList(newList);
  }

  deleteItem(id) {
    const { list } = this.state;

    const newList = list.filter((item) => item.id !== id);

    this.saveList(newList);
  }

  handleChangeFilter(event) {
    this.setState({ filter: event.target.value });
  }

  handleAddItem(description, priority) {
    this.setState((prevState) => {
      const newToDo = this.createNewItem(prevState, description, priority);

      localStorage.setItem("todoList", JSON.stringify(newToDo));

      return { list: newToDo };
    });
  }

  render() {
    const { isShow, list, filter } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.select}>
          <select size="1" value={filter} onChange={this.handleChangeFilter}>
            <option value="all">Все задачи</option>
            <option value="done">Выполненные</option>
            <option value="current">Текущие</option>
          </select>
          <div className={styles.selectArrow}></div>
        </div>
        <ToDoList
          list={list}
          filter={filter}
          changeStatus={this.changeStatus}
          deleteItem={this.deleteItem}
        ></ToDoList>
        <Button
          theme="default"
          color="green"
          size="lg"
          onClick={() => this.setState({ isShow: true })}
        >
          Add a new todo
        </Button>
        <PopUp
          isShow={isShow}
          handleClose={() => this.setState({ isShow: false })}
          addItem={this.handleAddItem}
        />
      </div>
    );
  }
}

export default ToDoContainer;
