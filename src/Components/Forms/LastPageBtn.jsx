import React from 'react'
import styles from "./form.module.css"

const LastPageBtn = () => {
  return (
    <div className={styles.mainDiv}>
         <form className={styles.form1}>            
            <div>
                <input type="submit" className="form-control" value="Launch Workspace" id={styles.btn} />
            </div>
        </form>
    </div>
  )
}

export default LastPageBtn