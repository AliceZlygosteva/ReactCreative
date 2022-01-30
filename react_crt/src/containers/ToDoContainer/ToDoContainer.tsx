import React, { ChangeEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import TodoStore from "../../store/TodoStore";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

import withLoader from "../../components/HOC/withLoader";

import { FILTER_TYPES } from "../../constants";

import { IAddTodo, TFilterTypesValues } from "../../types";

import styles from "./ToDoContainer.module.scss";

const ListWithLoader = withLoader(ToDoList);

const ToDoContainer = () => {
  const list = TodoStore.list;
  const [filter, setFilter] = useState<TFilterTypesValues>(FILTER_TYPES.all);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const listTimeout = setTimeout(() => {
      TodoStore.setIsLoading(false);
    }, 2000);

    return () => clearTimeout(listTimeout);
  }, []);

  const handleAddTodo = (todoData: IAddTodo) => TodoStore.addTodo(todoData);
  const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => setFilter(event.target.value as TFilterTypesValues);
  const handleChangeStatus = (id: string, status: boolean) => TodoStore.changeStatus(id, status);
  const handleDeleteTodo = (id: string) => TodoStore.deleteTodo(id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TO-DO LIST</h2>
      <div className={styles.select}>
        <select
          size={1}
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
        isLoading={TodoStore.isLoading}
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
};

export default observer(ToDoContainer);
