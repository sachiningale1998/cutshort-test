import React from "react";
import styles from "./planoptions.module.css";

const PlanOptions = () => {
  return (
    <div className={styles.mainDiv}>
      <form className={styles.form1}>
        <div className={styles.flexParent}>
          <div className={styles.flexBox1}>
            <div className={styles.flexBoxChild}>
              <i style={{ color: "#654de4" }} className="fa-solid fa-user"></i>
              <p className={styles.heading}>For myself</p>
              <p className={styles.para}>
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
          <div className={styles.flexBox2}>
            <div className={styles.flexBoxChild}>
              <i className="fa-solid fa-users"></i>
              <p className={styles.heading}>With my team</p>
              <p className={styles.para}>
                Wikis, docs, tasks and projects, all in one place.
              </p>
            </div>
          </div>
        </div>
        <div>
          <input
            type="submit"
            className="form-control"
            value="Create Workspace"
            id={styles.btn}
          />
        </div>
      </form>
    </div>
  );
};

export default PlanOptions;
