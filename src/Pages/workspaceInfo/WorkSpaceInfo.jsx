import React from 'react'
import {useState} from "react"
import styles from './workspaceinfo.module.css'
import Form2 from '../../Components/Forms/Form2'
import Header from '../../Components/Header/Header'
import LogoNBrand from '../../Components/LogoNBrand/LogoNBrand'
import ProgressComp from '../../Components/ProgressComp/ProgressComp'

const WorkSpaceInfo = () => {
    const [heading, setHeading] = useState("Let's set up a home for all your work")
    const [para, setPara] = useState("You can always create another workspace later.")
    const [pageNum, setPageNum] = useState(2)
  return (
    <div className={styles.mainContainer}>
        <LogoNBrand />
        <ProgressComp pageNum={pageNum} />
        <Header heading={heading} para={para} />
        <Form2 />
    </div>
  )
}

export default WorkSpaceInfo