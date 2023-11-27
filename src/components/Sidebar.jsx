import React  from "react";
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Sidebar.module.css";
import Sidebardata from "./Sidebardata";
import settings from '../images/icons/settings.png'
import support from '../images/icons/support.png'



function Sidebar() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.barContainer}>
        {Sidebardata.map((item) => (
          <Link className={styles.linkedItem} to={item.path}>
            <div className={styles.sidebarItem} key={item.id}>
              <div>
                <img src={item.icon} alt="" />
              </div>
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.barContainer}>
        <div className={styles.sidebarItem}>
          <div>
            <img src={settings} alt="" />
          </div>
          <span>Settings</span>
        </div>
        <div className={styles.sidebarItem}>
        <div>
          <img src={support} alt="" />
        </div>
        <span>Help & Support</span>
        </div>
      </div>
      
          
      {/* <Link to="/"> */}
        <button onClick={logout}>Logout</button>
      {/* </Link> */}
    </div>
  );
}

export default Sidebar;
