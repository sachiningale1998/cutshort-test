import React from 'react'
import styles from "./form.module.css"

const Form2 = () => {
  return (
    <div className={styles.mainDiv}>
         <form className={styles.form1}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder='Eden' aria-describedby="emailHelp" />
            </div>
                <label id={styles.urlLabel} htmlFor="workurl" className="form-label">Workspace URL <span className={styles.optSpan}>(optional)</span></label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">www.eden.com/</span>
                <input type="text" class="form-control" id="basic-url" placeholder='Example' aria-describedby="basic-addon3" />
            </div>

            <div>
                <input type="submit" className="form-control" value="Create Workspace" id={styles.btn} />
            </div>
        </form>
    </div>
  )
}

export default Form2