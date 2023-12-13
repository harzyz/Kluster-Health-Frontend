import React, { useContext, useEffect } from "react";
import styles from "../../pages/patientspages/PatientsOverview.module.css";
import { AnimatePresence, motion } from "framer-motion"
import { FaTimes } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

function Medications() {

  const { medicationStats, addMed, deleteMed } = useContext(AuthContext);
  
  useEffect(()=> {
    addMed()
  })
  
  if(medicationStats.length === 0){
    return <h1>No Medications yet...</h1>
  }
  

  return (
    <div className={styles.medicationPrescription}>
      <AnimatePresence  >
      {medicationStats.slice(0, 2).map((item) => (
        <motion.div key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ duration: 0.5 }}>
        <div key={item.id} className={styles.medicationsTab}>
          <button onClick={() => deleteMed(item.id)}>
            <FaTimes fill="Red" />
          </button>
          <div className={styles.profileInfo}>
            <span>Medication Name: {item.medicationName}</span>
            <span>12Mygt</span>
          </div>
          <div className={styles.keyInfo}>
            <div className={styles.detailKey}>
              <span>Start: {item.startDate}</span>
              <span>End: {item.endDate}</span>
            </div>
            <div className={styles.detailKey}>
              <span>Prescribed by: {item.prescribedBy}</span>
              <span>Prescribed in: {item.prescribedIn}</span>
            </div>
            <div className={styles.detailKey}>
              <span>Dosage strength: {item.dosageStrength}</span>
              <span>Dosage form: {item.dosageForm}</span>
            </div>
          </div>
        </div>
        </motion.div>
      ))}
      </AnimatePresence>
      <div></div>
    </div>
  );
}

export default Medications;
