import React from 'react'
import styles from "./header.module.css"

const Header = (props) => {
 let {heading, para} = props
  return (
    <div className={styles.mainDivHeader}>
            <h1>{heading}</h1>
            <p className={styles.paragraph}>{para}</p>
    </div>
  )
}

export default Header