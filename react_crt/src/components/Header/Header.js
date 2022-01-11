import React from "react";

import styles from "./Header.module.scss";

class Header extends React.Component {
  render () {
    return (
      <div className={styles.header}>
        <h2>My React App</h2>
      </div>
    );
  };
};

export default Header;