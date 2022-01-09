import React from "react";
import cn from "classnames";

import Button from "../UI/Button";

import styles from "./PopUp.module.scss";

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", priority: 0 };

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.createToDo = this.createToDo.bind(this);
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangePriority(event) {
    this.setState({ priority: event.target.value });
  }

  createToDo() {
    const { addItem, handleClose } = this.props;
    const { description, priority } = this.state;

    addItem(description, priority);
    handleClose();
    this.setState({
      description: "",
      priority: 0,
    })
  }

  render() {
    const { className, isShow, handleClose } = this.props;
    const { description, priority } = this.state;

    return (
      <div
        className={cn(styles.modal, className, {
          [styles["is-opened"]]: isShow,
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
            <option value="0">Обычная</option>
            <option value="1">Важная</option>
            <option value="2">Срочная</option>
          </select>
        </div>
        <div className={styles.modalButton}>
          <Button
            className={styles.buttonMargin}
            theme="default"
            color="white"
            size="m"
            onClick={() => handleClose()}
          >
            Back
          </Button>
          <Button
            className={styles.buttonMargin}
            theme="default"
            color="green"
            size="m"
            onClick={this.createToDo}
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default PopUp;
