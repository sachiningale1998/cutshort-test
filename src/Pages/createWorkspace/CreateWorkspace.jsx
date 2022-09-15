import React from 'react'
import {useState} from 'react'
import Form1 from '../../Components/Forms/Form1'
import Header from '../../Components/Header/Header'
import LogoNBrand from '../../Components/LogoNBrand/LogoNBrand'
import styles from "./createWorkSpace.module.css"

const CreateWorkspace = () => {
  const [heading, setHeading] = useState("Welcome! First things first...")
  const [para, setPara] = useState("You can always change them later.")
  return (
    <div className={styles.mainContainer}>
        <LogoNBrand />
        <Header heading={heading} para={para} />
        <Form1 />    
    </div>
  )
}

export default CreateWorkspace