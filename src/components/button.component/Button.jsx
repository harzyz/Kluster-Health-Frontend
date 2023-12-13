import React from 'react'
import styles from './Button.module.css'

function Button({title, type, p, b, onClick, color, bg, ftw, w, h, fs}) {
  return (
    <button onClick={onClick} type={type} className={styles.inviteDoctors} style={{ border:b, padding:p, fontSize:fs, height:h, width:w, fontWeight:ftw, color:color, background:bg }} >
      {title}
    </button>
  )
}

export default Button
