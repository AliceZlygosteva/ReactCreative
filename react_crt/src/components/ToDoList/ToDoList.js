import React from "react";
import PropTypes from "prop-types";

import ItemToDo from "../ItemToDo/ItemToDo";

import styles from "./ToDoList.module.scss";

class ToDoList extends React.Component {
  filteringTasks(filterType, arrTasks) {
    switch (filterType) {
      case "done":
        return arrTasks.filter((task) => task.isCompleted);

      case "current":
        return arrTasks.filter((task) => !task.isCompleted);

      default:
        return arrTasks;
    }
  }

  render() {
    const { list, filter } = this.props;
    const filteredList = this.filteringTasks(filter, list);

    return (
      <div className={styles.list}>
        {filteredList?.map((item) => (
          <ItemToDo item={item} key={item.id} {...this.props} />
        ))}
      </div>
    );
  }
}

ToDoList.propTypes = {
  filter: PropTypes.string,
  list: PropTypes.array
};

export default ToDoList;
