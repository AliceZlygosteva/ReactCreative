import React, { useContext, useState } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import { ThemeContext } from "../../context/index";

import styles from "./PopUp.module.scss";

const PopUp = ({ addItem, className, handleClose, isShow }) => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("common");

  const theme = useContext(ThemeContext);

  const handleChangeDescription = (event) => setDescription(event.target.value);

  const handleChangePriority = (event) => setPriority(event.target.value);

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
    setPriority("common");
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
          size="35"
          value={description}
          onChange={(event) => handleChangeDescription(event)}
        />
      </div>
      <div className={styles.modalSelect}>
        <select
          size="1"
          value={priority}
          onChange={(event) => handleChangePriority(event)}
        >
          <option value="common">Обычная</option>
          <option value="important">Важная</option>
          <option value="hot">Срочная</option>
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

PopUp.propTypes = {
  addItem: PropTypes.func,
  className: PropTypes.string,
  handleClose: PropTypes.func,
  isShow: PropTypes.bool,
};

export default PopUp;
