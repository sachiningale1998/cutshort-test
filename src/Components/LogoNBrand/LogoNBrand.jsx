import React from "react";
import styles from "./logoNBrand.module.css";
import logo from "../collections/edenLogo.jpg";

const LogoNBrand = () => {
  return (
    <div className={styles.parentDiv}>
      <div>
        <img src={logo} alt="edenLogo" />
      </div>
      <div>
        <h3>Eden</h3>
      </div>
    </div>
  );
};

export default LogoNBrand;
