import React from "react";
import styles from "./Navbar.module.css";
import searchIcon from "../images/iconoir_search.svg";
import notifyIcon from "../images/mi_notification.png";
import profilePic from "../images/profilepic.png";

function Navbar() {
  return (
    <div className={styles.outer}>
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <span>Name</span>
          <span>Doctors Dashboard</span>
          <div className={styles.search}>
            <input type="text" placeholder="Search here" />
            <img src={searchIcon} alt="" />
          </div>
          <div className={styles.profile}>
            <img className={styles.notifyIcon} src={notifyIcon} alt="" />
            <img src={searchIcon} alt="" />
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
