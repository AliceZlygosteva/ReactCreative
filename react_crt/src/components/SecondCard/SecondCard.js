import React from "react";

import styles from "./SecondCard.module.scss";

class SecondCard extends React.Component {
  render () {
    return (
      <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>С Новым годом!</h3>
      <div className={styles.cardImage}>
        <img src="/Tiger2.jpg" alt='tiger' />
        </div>
      </div>
    );
  }
};

export default SecondCard;