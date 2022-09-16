import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  let { heading, para } = props;
  return (
    <div className={styles.mainDivHeader}>
      <h2>{heading}</h2>
      <p className={styles.paragraph}>{para}</p>
    </div>
  );
};

export default Header;
