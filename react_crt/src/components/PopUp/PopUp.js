import React from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import { ThemeContext } from "../../context/index";

import styles from "./PopUp.module.scss";

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", priority: "common" };

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.createToDo = this.createToDo.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangePriority(event) {
    this.setState({ priority: event.target.value });
  }

  handleClosePopup() {
    const { handleClose } = this.props;

    this.setState({
      description: "",
      priority: "common",
    });

    handleClose();
  }

  createToDo() {
    const { addItem, handleClose } = this.props;
    const { description, priority } = this.state;

    if (!description) return;
    
    addItem({ description, priority, id: uuidv4() });
    handleClose();
    this.setState({
      description: "",
      priority: "common",
    })
  }

  render() {
    const { className, isShow } = this.props;
    const { description, priority } = this.state;
    const { theme } = this.context;

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
            onChange={this.handleChangeDescription}
          />
        </div>
        <div className={styles.modalSelect}>
          <select size="1" value={priority} onChange={this.handleChangePriority}>
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
            onClick={this.handleClosePopup}
          >
            Back
          </Button>
          <Button
            className={styles.buttonMargin}
            color="green"
            size="m"
            onClick={this.createToDo}
          >
            Add
          </Button>
        </div>
      </div>
    );
  };
};

PopUp.contextType = ThemeContext;

PopUp.propTypes = {
  className: PropTypes.string,
  isShow: PropTypes.bool,
};

export default PopUp;
