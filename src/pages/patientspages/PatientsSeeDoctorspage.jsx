import React from "react";
import styles from "./PatientsSeeDoctorspage.module.css";
import PatientsSeeDoctorData from "../../data/PatientsSeeDoctorData";
import Wrapper from "../../components/Wrapper";
import Button from '../../components/Button'

function PatientsSeeDoctorspage() {
  return (
    <Wrapper>
      <h3>Doctors List</h3>
      <div className={styles.innerWrapper}>
        {PatientsSeeDoctorData.map((item)=>(
          <div key={item.id} className={styles.doctorsTab}>
          <div className={styles.profileContainer}>
            <div className={styles.patientspfp}>
              <img src={item.doctorspfp} alt="" />
            </div>
            <div className={styles.profileInfo}>
              <span>{item.doctorsname}</span>
              <span>{item.proffesion}</span>
              <span>{item.email}</span>
            </div>
          </div>
          <div className={styles.yearn}>
            <Button color='#A6CBFA' b='2px solid #A6CBFA' w='140px' p='6px 16px' fs='13px' bg='#fff' title='Remove' />
            <Button color='#fff' w='140px' p='6px 16px' fs='13px' bg='#A6CBFA' title='Invite' />
          </div>
        </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default PatientsSeeDoctorspage;
