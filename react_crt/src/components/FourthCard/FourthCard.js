import React from "react";

import styles from "./FourthCard.module.scss";

class FourthCard extends React.Component {
  render () {
    return (
      <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>С Новым годом!</h3>
      <div className={styles.cardImage}>
        <img src="/Present.jpeg" alt='present' />
        </div>
      </div>
    );
  }
};

export default FourthCard;