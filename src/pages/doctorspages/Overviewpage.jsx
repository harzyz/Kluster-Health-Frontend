import React from "react";
import styles from "./Overviewpage.module.css";
import DoctorOverviewData from "../../data/DoctorOverviewData";
// import image1 from '../images/totalpatients.png'
// import image2 from '../images/successrate.png'
// import image3 from '../images/totalappointments.png'
// import image4 from '../images/activepatients.png'

function Overviewpage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.summaryContainer}>
          <div className={styles.head}>
            <h3>Summary</h3>
          </div>
          <div className={styles.summary}>
            <div className={styles.patients}></div>
            <div className={styles.succesrate}></div>
            <div className={styles.appointments}></div>
            <div className={styles.activepatients}></div>
          </div>
        </div>
        <div className={styles.remainderContainer}>
          <div className={styles.head}>
            <h3>Remainders</h3>
            <span className={styles.viewall}>View all</span>
          </div>
          <div className={styles.remainderList}>
            <div className={styles.remainderListItem}>
              <input
                className={styles.reminderCaption}
                type="text"
                placeholder="Add label"
              />
              <input className={styles.reminderTime} type="text" />
            </div>
            <div className={styles.remainderListItem1}>
              <input
                className={styles.reminderCaption}
                type="text"
                placeholder="Add label"
              />
              <input className={styles.reminderTime} type="text" />
            </div>
            <div className={styles.remainderListItem2}>
              <input
                className={styles.reminderCaption}
                type="text"
                placeholder="Add label"
              />
              <input className={styles.reminderTime} type="text" />
            </div>
            <div className={styles.remainderListItem3}>
              <input
                className={styles.reminderCaption}
                type="text"
                placeholder="Add label"
              />
              <input className={styles.reminderTime} type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.head}>
        <h3>Patients</h3>
        <span className={styles.viewall}>View all</span>
      </div>
      <div className={styles.bottom}>
        {DoctorOverviewData.map((item) => (
          <div key={item.id} className={styles.groupPatients}>
            <div className={styles.patientInfo}>
              <div className={styles.pfpContainer}>
                <img src={item.pfp} alt="" />
              </div>
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>{item.fullName}</span>
                <span>{item.email}</span>
              </div>
            </div>
            <div className={styles.keyInfo}>
              <div className={styles.detailKey}>
                <span className={styles.detailKeyText}>File Number</span>
                <span className={styles.detailKeyText}>{item.fileNumber}</span>
              </div>
              <div className={styles.detailKey}>
                <span className={styles.detailKeyText}>Date</span>
                <span className={styles.detailKeyText}>{item.addmitedDate}</span>
              </div>
              <div className={styles.detailKey}>
                <span className={styles.detailKeyText}>Status</span>
                <span className={styles.patientStatusA}>Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overviewpage;
