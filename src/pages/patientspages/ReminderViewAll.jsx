import React from "react";
import styles from "./ReminderViewAll.module.css";
import Wrapper from "../../components/Wrapper";
import ReminderData from "../../data/ReminderData";
import CompletedData from "../../data/CompletedData";
import Button from "../../components/button.component/Button";

function ReminderViewAll() {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.outercontain}>
          <div className={styles.head}>
            <h3>Reminders</h3>
            <Button fs="14px" w="52px" h="28px" title={"Add"} bg="#A6CBFA" />
          </div>
          <div className={styles.contain}>
            {ReminderData.map((item) => (
              <div key={item.id} className={styles.medReminder}>
                <div className={styles.medicationDetails}>
                  <span>{item.medName}</span>
                  <span>{item.medFreq}</span>
                  <span>{item.nextDose}</span>
                </div>
                <div className={styles.yearn}>
                  <Button
                    bg="#fff"
                    b="2px solid #A6CBFA"
                    fw="400"
                    color="#A6CBFA"
                    fs="14px"
                    p="6px 16px"
                    w="74px"
                    title="Delete"
                  />
                  <Button
                    bg="#A6CBFA"
                    p="6px 16px"
                    fw="400"
                    color="#fff"
                    fs="14px"
                    w="74px"
                    title="Done"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.doctorsListContainer}>
          <h3>Completed</h3>
          <div className={styles.doctorsList}>
            {CompletedData.map((item) => (
              <div key={item.id} className={styles.medReminder}>
                <div className={styles.medicationDetails}>
                  <span>{item.medName}</span>
                  <span>{item.medFreq}</span>
                  <span>{item.nextDose}</span>
                </div>
                <div className={styles.yearn}>
                  <Button
                    bg="#A6CBFA"
                    p="6px 16px"
                    fw="400"
                    color="#fff"
                    fs="14px"
                    w="74px"
                    title="Delete"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.chartcontainer}>
            <h3>Reminder Summary</h3>
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ReminderViewAll;
