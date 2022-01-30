import React from "react";
import cn from "classnames";

import Button from "../UI/Button";

import { TASKS_PRIORITY } from "../../constants";
import { IItemToDoProps } from "./types";

import styles from "./ItemToDo.module.scss";

const ItemToDo = ({
  changeStatus,
  deleteItem,
  item: { id, isCompleted, description, priority },
}: IItemToDoProps) => {
  return (
    <div className={cn(styles.itemContainer, styles[priority])}>
      <div className={styles.item}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => changeStatus(id, !isCompleted)}
          ></input>
          <div className={styles.checkboxIndicator}></div>
        </label>
        <span>{description}</span>
        <div className={styles.priority}>{TASKS_PRIORITY[priority].title}</div>
        <Button
          buttonType="delete"
          color="red"
          size="s"
          onClick={() => deleteItem(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemToDo;
