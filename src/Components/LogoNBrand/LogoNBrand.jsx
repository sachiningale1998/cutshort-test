import React from 'react'
import styles from "./logoNBrand.module.css"
import logo from "../collections/edenLogo.jpg"

const Header = () => {
  return (
    <div className={styles.parentDiv}>
        <div>
            <img src={logo} alt="edenLogo" />
        </div>
        <div>
            <h2>Eden</h2>
        </div>
    </div>
  )
}

export default Header