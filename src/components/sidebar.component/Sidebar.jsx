import React  from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./Sidebar.module.css";
import { Sidebardata } from "./Sidebardata";
import { Sidemore } from "./Sidebardata";



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
          <NavLink key={item.id} className={styles.linkedItem} to={item.path}>
            <div className={styles.sidebarItem} >
              <div>
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className={styles.barContainer}>
        {Sidemore.map((item)=>(
          <div key={item.id} className={styles.sidebarItem}>
          <div>
            {item.icon}
          </div>
          <span>{item.title}</span>
        </div>
        ))}
        <button onClick={logout}>Logout</button>
      </div>
      
          
      {/* <Link to="/"> */}
      {/* </Link> */}
    </div>
  );
}

export default Sidebar;
