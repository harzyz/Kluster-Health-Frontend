import React from 'react'
import styles from './ActiveInactive.module.css'

function ActiveInactive({title}) {

  return (
    <div className={styles.active} style={{ backgroundColor: (title ==='Active') ? 'green' : 'red'}}>
      {title}
    </div>
  )
}

export default ActiveInactive
