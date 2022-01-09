import React from "react";
import Button from "../UI/Button";

import styles from "./ItemToDo.module.scss";

class ItemToDo extends React.Component {
  render() {
    const {
      item: { id, isCompleted, description, priority },
      changeStatus,
      deleteItem,
    } = this.props;

    return (
      <div className={styles.item}>
        <div>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => changeStatus(!isCompleted, id)}
          ></input>
          <span>{description}</span>
        </div>
        <div className={styles.itemPriority}>{priority}</div>
        <Button
          theme="delete"
          color="red"
          size="s"
          onClick={() => deleteItem(id)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default ItemToDo;
