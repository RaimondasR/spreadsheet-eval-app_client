import React from "react";
import styles from "./HeaderComp.module.css";

const HeaderComp = () => {
  return (
    <div className={styles.header_comp}>
      <div className={styles.div_wrap}>
        <div className={styles.fs26}>
          <b>Spreadsheet Evaluator Application</b>
        </div>
        <div className={styles.fs16_ml50_mb3}>
          <b>spreadsheet-eval-app</b>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
