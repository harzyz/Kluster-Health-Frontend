import React from 'react'
import styles from '../doctorspages/Dashboardpage.module.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'


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
        <Sidebar />
      </div>
    </div>
  )
}

export default PatientDashboardpage
