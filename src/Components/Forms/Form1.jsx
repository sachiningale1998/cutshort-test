import React from 'react'
import styles from "./form.module.css"

const Form1 = () => {
  return (
    <div className={styles.mainDiv}>
        <form className={styles.form1}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="displayName" className="form-label">Display Name</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <input type="submit" className="form-control" value="Create Workspace" id={styles.btn} />
            </div>
        </form>
    </div>
  )
}

export default Form1