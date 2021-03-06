import React from "react";
import PropTypes from "prop-types";

import ItemToDo from "../ItemToDo/ItemToDo";
import { FILTER_TYPES } from "../../constants";

import styles from "./ToDoList.module.scss";

const ToDoList = (props) => {
  const { filter, list } = props;
  
  const filteringTasks = (filterType, arrTasks) => {
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
        <ItemToDo item={item} key={item.id} {...props} />
      ))}
    </div>
  );
};

ToDoList.propTypes = {
  filter: PropTypes.string,
  list: PropTypes.array,
};

export default ToDoList;
