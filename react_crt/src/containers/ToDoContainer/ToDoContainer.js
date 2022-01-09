import React from "react";
import { v4 as uuidv4 } from "uuid";

import PopUp from "../../components/PopUp";
import Button from "../../components/UI/Button";
import ToDoList from "../../components/ToDoList";

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isShow: false,
    };

    this.addItem = this.addItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(description, priority) {
    const { list } = this.state;

    this.setState({
      list: [...list, { id: uuidv4(), description, priority, isCompleted: false }],
    });
  }

  changeStatus(status, id) {
    const { list } = this.state;

    const result = list.map((item) =>
      item.id === id ? { ...item, isCompleted: status } : item
    );

    this.setState({
      list: result,
    });
  }

  deleteItem(id) {
    const { list } = this.state;

    this.setState({ list: list.filter((item) => item.id !== id) });
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <ToDoList
          list={this.state.list}
          changeStatus={this.changeStatus}
          deleteItem={this.deleteItem}
        ></ToDoList>
        <Button
          theme="default"
          color="green"
          size="lg"
          onClick={() => this.setState({ isShow: true })}
        >
          Add a new todo
        </Button>
        <PopUp
          isShow={isShow}
          handleClose={() => this.setState({ isShow: false })}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default ToDoContainer;
