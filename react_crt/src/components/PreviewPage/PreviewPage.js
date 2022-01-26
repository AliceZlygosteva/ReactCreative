import React from "react";
import { Link } from "react-router-dom";

import styles from "./PreviewPage.module.scss";

const PreviewPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>App by Zlygosteva Alice</span>
      </div>
      <Link to="/todo" className={styles.link}>
        start to create todo
      </Link>
    </div>
  );
};

export default PreviewPage;
