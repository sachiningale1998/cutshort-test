import React from 'react'
import {useState} from 'react'
import styles from "./edenplan.module.css"
import Header from '../../Components/Header/Header'
import LogoNBrand from '../../Components/LogoNBrand/LogoNBrand'
import ProgressComp from '../../Components/ProgressComp/ProgressComp'
import PlanOptions from '../../Components/Forms/PlanOptions'

const EdenPlan = () => {
    const [heading, setHeading] = useState("How are you planning to use Eden?")
    const [para, setPara] = useState("We'll streamline your setup experience accordingly.");
    const [pageNum, setPageNum] = useState(3)
  return (
    <div className={styles.planMainDiv}>
        <LogoNBrand />
        <ProgressComp pageNum={pageNum} />
        <Header heading={heading} para={para} />
        <PlanOptions />

    </div>
  )
}

export default EdenPlan