import React, { useEffect, useState } from "react";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

import withLoader from "../../components/HOC/withLoader";

import styles from "./ToDoContainer.module.scss";

const ToDoContainer = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem("todoList")) || [];

    setTimeout(() => {
      setList(listFromStorage);
      setIsLoading(false);
    }, 2000);
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

  const changeStatus = (status, id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, isCompleted: status } : item
    );

    saveList(newList);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);

    saveList(newList);
  };

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

  const ListWithLoader = withLoader(
    ToDoList,
    {
      list,
      filter,
      changeStatus,
      deleteItem,
    },
    isLoading
  );

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <select
          size="1"
          value={filter}
          onChange={(event) => handleChangeFilter(event)}
        >
          <option value="all">Все задачи</option>
          <option value="done">Выполненные</option>
          <option value="current">Текущие</option>
        </select>
        <div className={styles.selectArrow}></div>
      </div>
      <ListWithLoader />
      <Button
        color="green"
        size="lg"
        onClick={() => setIsShow(true)}
      >
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
