import React from 'react'
import styles from './Dashboardpage.module.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import NavDownBar from '../../components/NavDownBar'

function Dashboardpage({children}) {
  return (
    <div>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.outer}>
          <div className={styles.fixed}>
            <Sidebar />
          </div>
        </div>
        {children}
      </div>
      <div className={styles.navbardown}>
        <NavDownBar />
      </div>
    </div>
  )
}

export default Dashboardpage
