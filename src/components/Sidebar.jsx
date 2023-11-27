import React  from "react";
import { Link } from 'react-router-dom'
import styles from "./Sidebar.module.css";
import Sidebardata from "./Sidebardata";
import settings from '../images/icons/settings.png'
import support from '../images/icons/support.png'

function Sidebar() {
  // const navigate = useNavigate()

  const handleClick = () => {
    console.log('object')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.barContainer}>
        {Sidebardata.map((item) => (
          <Link className={styles.linkedItem} to={item.path}>
            <div className={styles.sidebarItem} key={item.id}>
            <img src={item.icon} alt="" />
            <span>{item.title}</span>
          </div>
          </Link>
        ))}
      </div>

      <div className={styles.barContainer}>
        <div className={styles.sidebarItem}>
          <img src={settings} alt="" />
          <span>Settings</span>
        </div>
        <div className={styles.sidebarItem}>
        <img src={support} alt="" />
        <span>Help & Support</span>
        </div>
      </div>
      
          
      <Link to="/">
        <button onClick={handleClick}>Logout</button>
      </Link>
    </div>
  );
}

export default Sidebar;
