import React from "react";

import ItemToDo from "../ItemToDo/ItemToDo";

class ToDoList extends React.Component {
  render() {
    const { list, addItem, changeStatus, deleteItem } = this.props;

    return (
      <>
        {list?.map((item) => (
          <ItemToDo
            item={item}
            addItem={addItem}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
            key={item.id}
          ></ItemToDo>
        ))}
      </>
    );
  }
}

export default ToDoList;
