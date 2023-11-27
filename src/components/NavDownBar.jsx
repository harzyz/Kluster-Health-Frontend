import React from 'react'
import styles from "./NavDownBar.module.css";
import homeIcon from '../images/icons/homestress.png'
import doctorIcon from '../images/icons/tethoscopestress.png'
import notificationIcon from '../images/icons/notifystress.png'
import messageIcon from '../images/icons/messages stress.png'

function NavDownBar() {
  return (
    <div className={styles.sidebarmobile}>
        <div>
          <img src={homeIcon} alt="" />
        </div>
        <div>
          <img src={doctorIcon} alt="" />
        </div>
        <div>
          <img src={notificationIcon} alt="" />
        </div>
        <div>
          <img src={messageIcon} alt="" />
        </div>
      </div>
  )
}

export default NavDownBar
