import React from "react";

import styles from "./HeaderToDo.module.scss";

class HeaderToDo extends React.Component {
  render () {
    return (
      <div className={styles.header}>
        <h2>TO-DO LIST</h2>
      </div>
    );
  };
};

export default HeaderToDo;