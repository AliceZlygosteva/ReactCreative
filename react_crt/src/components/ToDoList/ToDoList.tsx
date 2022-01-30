import React from "react";

import ItemToDo from "../ItemToDo/ItemToDo";
import { FILTER_TYPES } from "../../constants";

import { IItemTodo, TFilterTypesValues } from "../../types";
import { IToDOListProps } from "./types";

import styles from "./ToDoList.module.scss";

const ToDoList = (props: IToDOListProps) => {
  const { changeStatus, deleteItem, filter, list } = props;

  const filteringTasks = (
    filterType: TFilterTypesValues,
    arrTasks: IItemTodo[]
  ) => {
    switch (filterType) {
      case FILTER_TYPES.done:
        return arrTasks.filter((task) => task.isCompleted);

      case FILTER_TYPES.current:
        return arrTasks.filter((task) => !task.isCompleted);

      default:
        return arrTasks;
    }
  };

  const filteredList = filteringTasks(filter, list);

  return (
    <div className={styles.list}>
      {filteredList?.map((item) => (
        <ItemToDo
          item={item}
          key={item.id}
          changeStatus={changeStatus}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ToDoList;
