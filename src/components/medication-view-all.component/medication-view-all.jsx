import React, { useContext, useEffect } from "react";
import styles from "../../pages/patientspages/PatientsOverview.module.css";
import { FaTimes } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import Wrapper from "../Wrapper";
// import Wrapper from "../Wrapper";

function MedicationViewAll() {
  const { medicationStats, addMed, deleteMed } = useContext(AuthContext);

  useEffect(() => {
    addMed();
  });

  return (
    <Wrapper>
      <div className={styles.medicationPrescription}>
        {medicationStats.map((item) => (
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
        ))}
        <div></div>
      </div>
    </Wrapper>
  );
}

export default MedicationViewAll;
