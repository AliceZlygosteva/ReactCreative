import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Todo from "../../store/Todo";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

import withLoader from "../../components/HOC/withLoader";

import { FILTER_TYPES } from "../../constants";

import styles from "./ToDoContainer.module.scss";

const ListWithLoader = withLoader(ToDoList);

const ToDoContainer = observer(() => {
  const list = Todo.list;
  const [filter, setFilter] = useState(FILTER_TYPES.all);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const listTimeout = setTimeout(() => {
      Todo.setIsLoading(false);
    }, 2000);

    return () => clearTimeout(listTimeout);
  }, []);

  const handleAddTodo = (todoData) => Todo.addTodo(todoData);
  const handleChangeFilter = (event) => setFilter(event.target.value);
  const handleChangeStatus = (id, status) => Todo.changeStatus(id, status);
  const handleDeleteTodo = (id) => Todo.deleteTodo(id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TO-DO LIST</h2>
      <div className={styles.select}>
        <select
          size="1"
          value={filter}
          onChange={(event) => handleChangeFilter(event)}
        >
          <option value={FILTER_TYPES.all}>Все задачи</option>
          <option value={FILTER_TYPES.done}>Выполненные</option>
          <option value={FILTER_TYPES.current}>Текущие</option>
        </select>
        <div className={styles.selectArrow}></div>
      </div>
      <ListWithLoader
        isLoading={Todo.isLoading}
        list={list}
        filter={filter}
        changeStatus={handleChangeStatus}
        deleteItem={handleDeleteTodo}
      />
      <Button color="green" size="lg" onClick={() => setIsShow(true)}>
        Add a new todo
      </Button>
      <PopUp
        isShow={isShow}
        handleClose={() => setIsShow(false)}
        addItem={handleAddTodo}
      />
    </div>
  );
});

export default ToDoContainer;
