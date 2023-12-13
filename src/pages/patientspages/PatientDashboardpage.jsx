import React from 'react'
import styles from '../doctorspages/Dashboardpage.module.css'
import NavDownBar from '../../components/navbar.component/NavDownBar'
import Sidebar from '../../components/sidebar.component/Sidebar'
import Navbar from '../../components/navbar.component/Navbar'


function PatientDashboardpage({children}) {
  return (
    <div className={styles.wrapper}>
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

export default PatientDashboardpage
