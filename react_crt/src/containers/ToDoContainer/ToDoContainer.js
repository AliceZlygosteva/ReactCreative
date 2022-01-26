import React, { useCallback, useEffect, useState } from "react";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

import withLoader from "../../components/HOC/withLoader";

import { FILTER_TYPES } from "../../constants";

import styles from "./ToDoContainer.module.scss";

const ListWithLoader = withLoader(ToDoList);

const ToDoContainer = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(FILTER_TYPES.all);
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem("todoList")) || [];

    const getListTimeout = setTimeout(() => {
      setList(listFromStorage);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(getListTimeout);
  }, []);

  const saveList = (newList) => {
    setList(newList);
    localStorage.setItem("todoList", JSON.stringify(newList));
  };

  const createNewItem = (prevList, { description, priority, id }) => {
    const hasMatchDescription = prevList.some(
      (item) => item.description === description
    );

    if (hasMatchDescription) return alert("Задача уже существует");

    return [...list, { id, description, priority, isCompleted: false }];
  };

  const changeStatus = useCallback(
    (status, id) => {
      const newList = list.map((item) =>
        item.id === id ? { ...item, isCompleted: status } : item
      );

      saveList(newList);
    },
    [list]
  );

  const deleteItem = useCallback(
    (id) => {
      const newList = list.filter((item) => item.id !== id);

      saveList(newList);
    },
    [list]
  );

  const handleChangeFilter = (event) => setFilter(event.target.value);

  const handleAddItem = ({ description, priority, id }) => {
    setList((prevList) => {
      const newToDo = createNewItem(prevList, {
        description,
        priority,
        id,
      });

      localStorage.setItem("todoList", JSON.stringify(newToDo));

      return newToDo;
    });
  };

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
        isLoading={isLoading}
        list={list}
        filter={filter}
        changeStatus={changeStatus}
        deleteItem={deleteItem}
      />
      <Button color="green" size="lg" onClick={() => setIsShow(true)}>
        Add a new todo
      </Button>
      <PopUp
        isShow={isShow}
        handleClose={() => setIsShow(false)}
        addItem={handleAddItem}
      />
    </div>
  );
};

export default ToDoContainer;
