import React from 'react'
import {useState} from 'react'
import LastPageBtn from '../../Components/Forms/LastPageBtn'
import Header from '../../Components/Header/Header'
import LastPageIcon from '../../Components/lastPageIcon/LastPageIcon'
import LogoNBrand from '../../Components/LogoNBrand/LogoNBrand'
import ProgressComp from '../../Components/ProgressComp/ProgressComp'
import styles from "./lastpage.module.css"

const LastPage = () => {
    const [heading, setHeading] = useState("Congratulations, Eren!")
    const [para, setPara] = useState("You have completed onboarding, you can start using the Eden!")
    const [pageNum, setPageNum] = useState(4)
  return (
    <div className={styles.mainContainerLast}>
        <LogoNBrand />
        <ProgressComp pageNum={pageNum} />
        <LastPageIcon />
        <Header heading={heading} para={para} />
        <LastPageBtn />
    </div>
  )
}

export default LastPage