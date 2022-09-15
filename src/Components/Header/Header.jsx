import React from 'react'
import styles from "./header.module.css"

const Header = (props) => {
 let {heading, para} = props
  return (
    <div>
            <h1>{heading}</h1>
            <p>{para}</p>
    </div>
  )
}

export default Header