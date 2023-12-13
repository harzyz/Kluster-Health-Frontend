import React from 'react'
import styles from "./NavDownBar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { PiStethoscopeFill } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

function NavDownBar() {
  return (
    <div className={styles.sidebarmobile}>
        <div>
          <IoHomeOutline style={{fontSize: '30px'}} />
        </div>
        <div>
          <PiStethoscopeFill style={{fontSize: '30px'}} />
        </div>
        <div>
          <IoIosNotificationsOutline style={{fontSize: '30px'}} />
        </div>
        <div>
          <TiMessages style={{fontSize: '30px'}} />
        </div>
      </div>
  )
}

export default NavDownBar
