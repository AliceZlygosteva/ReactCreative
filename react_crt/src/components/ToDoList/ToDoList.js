import React from "react";

import ItemToDo from "../ItemToDo/ItemToDo";

import styles from "./ToDoList.module.scss";

class ToDoList extends React.Component {
  filteringTasks(filterType, arrTasks) {
    switch (filterType) {
      case "done":
        return arrTasks.filter((task) => !!task.isCompleted);

      case "current":
        return arrTasks.filter((task) => !task.isCompleted);

      default:
        return arrTasks;
    }
  }
  
  render() {
    const { list, filter, addItem, changeStatus, deleteItem } = this.props;
    const filteredList = this.filteringTasks(filter, list);

    return (
      <div className={styles.list}>
        {filteredList?.map(item => (
          <ItemToDo
            item={item}
            addItem={addItem}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
            key={item.id}
          ></ItemToDo>
        ))}
      </div>
    );
  }
}

export default ToDoList;
