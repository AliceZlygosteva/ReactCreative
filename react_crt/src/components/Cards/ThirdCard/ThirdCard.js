import React from "react";

import styles from "./ThirdCard.module.scss";

const ThirdCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>С Новым годом!</h3>
      <div className={styles.cardImage}>
        <img src="/Santa.jpeg" alt='tree' />
      </div>
    </div>
  );
};

export default ThirdCard;