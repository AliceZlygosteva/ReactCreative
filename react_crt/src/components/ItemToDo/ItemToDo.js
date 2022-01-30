import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import { TASKS_VALUE } from "./store";

import styles from "./ItemToDo.module.scss";

const ItemToDo = ({
  item: { id, isCompleted, description, priority },
  changeStatus,
  deleteItem,
}) => {
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
        <div className={styles.priority}>{TASKS_VALUE[priority]}</div>
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

ItemToDo.propTypes = {
  changeStatus: PropTypes.func,
  deleteItem: PropTypes.func,
  item: PropTypes.object,
};

export default ItemToDo;
