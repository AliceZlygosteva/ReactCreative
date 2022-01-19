import React from "react";

import styles from "./FirstCard.module.scss";

const FirstCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>С Новым годом!</h3>
      <div className={styles.cardImage}>
        <img src="/Tiger1.jpg" alt='tiger' />
      </div>
    </div>
  );
};

export default FirstCard;
