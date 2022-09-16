import React from "react";
// import { useState } from 'react'
import styles from "./progressComp.module.css";
const ProgressComp = (props) => {
  let { pageNum } = props;
  let page1;
  let page2;
  let page3;
  let page4;
  let firstPageLine;
  let secondPageLine;
  let thirdPageLine;
  let fourthPageLine;
  if (pageNum === 1) {
    page1 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    firstPageLine = {
      borderTop: "1px solid #654de4",
    };
  }
  if (pageNum === 2) {
    page1 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    firstPageLine = {
      borderTop: "1px solid #654de4",
    };
    page2 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    secondPageLine = {
      borderTop: "1px solid #654de4",
    };
  }
  if (pageNum === 3) {
    page1 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    firstPageLine = {
      borderTop: "1px solid #654de4",
    };
    page2 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    secondPageLine = {
      borderTop: "1px solid #654de4",
    };
    page3 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    thirdPageLine = {
      borderTop: "1px solid #654de4",
    };
  }
  if (pageNum === 4) {
    page1 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    firstPageLine = {
      borderTop: "1px solid #654de4",
    };
    page2 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    secondPageLine = {
      borderTop: "1px solid #654de4",
    };
    page3 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    thirdPageLine = {
      borderTop: "1px solid #654de4",
    };
    page4 = {
      backgroundColor: "#654de4",
      border: "1px solid #654de4",
      color: "white",
    };
    fourthPageLine = {
      borderTop: "1px solid #654de4",
    };
  }

  return (
    <div className={styles.container}>
      <div style={page1} className={styles.round}>
        <span>1</span>
      </div>
      <div style={firstPageLine} className={styles.lineDivs}></div>
      <div style={secondPageLine} className={styles.lineDivs}></div>
      <div style={page2} className={styles.round}>
        <span>2</span>
      </div>
      <div style={secondPageLine} className={styles.lineDivs}></div>
      <div style={thirdPageLine} className={styles.lineDivs}></div>
      <div style={page3} className={styles.round}>
        <span>3</span>
      </div>
      <div style={thirdPageLine} className={styles.lineDivs}></div>
      <div style={fourthPageLine} className={styles.lineDivs}></div>
      <div style={page4} className={styles.round}>
        <span>4</span>
      </div>
    </div>
  );
};

export default ProgressComp;
