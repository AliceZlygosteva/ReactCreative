import React, { ChangeEvent, useContext, useState } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import { IPopUp } from "./types";

import Button from "../UI/Button";

import { ThemeContext } from "../../context/index";
import { TASKS_PRIORITY } from "../../constants";

import styles from "./PopUp.module.scss";

type TTaskPriority = keyof typeof TASKS_PRIORITY;
type TTaskPriorityValues = typeof TASKS_PRIORITY[TTaskPriority]["value"];

const PopUp = ({ addItem, className, handleClose, isShow }: IPopUp) => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TTaskPriorityValues>(
    TASKS_PRIORITY.common.value
  );

  const theme = useContext(ThemeContext);

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handleChangePriority = (e: ChangeEvent<HTMLSelectElement>) =>
    setPriority(e.target.value as TTaskPriorityValues);

  const handleClosePopup = () => {
    clearFields();
    handleClose();
  };

  const createToDo = () => {
    if (!description) return;

    addItem({ description, priority, id: uuidv4() });

    handleClose();
    clearFields();
  };

  const clearFields = () => {
    setDescription("");
    setPriority(TASKS_PRIORITY.common.value);
  };

  return (
    <div
      className={cn(styles.modal, className, {
        [styles["is-opened"]]: isShow,
        [styles[`modal--${theme}`]]: theme,
      })}
    >
      <div className={styles.modalTitle}>Create a new todo</div>
      <div className={styles.modalInput}>
        <input
          type="text"
          placeholder="Введите текст задачи"
          size={35}
          value={description}
          onChange={(event) => handleChangeDescription(event)}
        />
      </div>
      <div className={styles.modalSelect}>
        <select
          size={1}
          value={priority}
          onChange={(event) => handleChangePriority(event)}
        >
          <option value={TASKS_PRIORITY.common.value}>Обычная</option>
          <option value={TASKS_PRIORITY.important.value}>Важная</option>
          <option value={TASKS_PRIORITY.hot.value}>Срочная</option>
        </select>
      </div>
      <div className={styles.modalButton}>
        <Button
          className={styles.buttonMargin}
          color="white"
          size="m"
          onClick={() => handleClosePopup()}
        >
          Back
        </Button>
        <Button
          className={styles.buttonMargin}
          color="green"
          size="m"
          onClick={() => createToDo()}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default PopUp;
