import React from "react";
import { useState } from "react";
import Form1 from "../../Components/Forms/Form1";
import Header from "../../Components/Header/Header";
import LogoNBrand from "../../Components/LogoNBrand/LogoNBrand";
import ProgressComp from "../../Components/ProgressComp/ProgressComp";
import styles from "./createWorkSpace.module.css";

const CreateWorkspace = () => {
  const [heading, setHeading] = useState("Welcome! First things first...");
  const [para, setPara] = useState("You can always change them later.");
  const [pageNum, setPageNum] = useState(1);

  return (
    <div className={styles.mainContainer}>
      <LogoNBrand />
      <ProgressComp pageNum={pageNum} />
      <Header heading={heading} para={para} />
      <Form1 />
    </div>
  );
};

export default CreateWorkspace;
