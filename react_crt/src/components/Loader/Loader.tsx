import React from "react";

import styles from "./Loader.module.scss";

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
        <div className={styles.loader}></div>
        <div className={styles.loader}></div>
      </div>
    );
  }
}

export default Loader;
