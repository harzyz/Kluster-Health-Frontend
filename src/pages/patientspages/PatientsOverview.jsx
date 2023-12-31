import React, { useContext, useState } from "react";
import styles from "./PatientsOverview.module.css";
import ReminderData from "../../data/ReminderData";
import pfp from "../../images/patientspfp.png";
import malepfp from "../../images/maledoctorpfp.png";
import { Link } from "react-router-dom";
import InviteDoctorsData from "../../data/InviteDoctorsData";
import Medications from "../../components/medications.component/medications";
import AuthContext from "../../context/AuthContext";
import Button from "../../components/button.component/Button";
import Modal from "../../components/modal.component/Modal";

function PatientsOverview() {

  const { open, modalMedication, setModalMedication, setOpen, onSubmit, } = useContext(AuthContext);
  
  // For modal functions 
  const [open2, setOpen2] = useState(false);
 
  const {
    medicationName,
    startDate,
    endDate,
    prescribedBy,
    dosageStrength,
    dosageForm,
  } = modalMedication;

  const onChange = (e) => {
    setModalMedication((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onClose = () => {
    setOpen(false);
  };
  const onClose2 = () => {
    setOpen2(false);
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.medicationsWrapper}>
        <div className={styles.medicationContainer}>
          <div className={styles.head}>
            <h3>Medications</h3>
            <div className={styles.yearn}>
              <Button
                onClick={() => setOpen(true)}
                fs="14px"
                w="52px"
                h="28px"
                title={"Add"}
                bg="#A6CBFA"
              />
              <Link className={styles.link} to="/pmedication">
                <span className={styles.viewall}>View all</span>
              </Link>
            </div>
          </div>
          <Medications />
        </div>
        <div className={styles.reminderConfirm}>
          <div className={styles.head}>
            <h3>Reminders</h3>
            <div className={styles.yearn}>
              <Button
                onClick={() => setOpen2(true)}
                fs="14px"
                w="52px"
                h="28px"
                title={"Add"}
                bg="#A6CBFA"
              />
              <Link className={styles.link} to="/preminder">
                <span className={styles.viewall}>View all</span>
              </Link>
            </div>
          </div>
          <div className={styles.reminderConfirmItem}>
            {ReminderData.map((item) => (
              <div key={item.id} className={styles.medReminder}>
                <div className={styles.medicationDetails}>
                  <span>{item.medName}</span>
                  <span>{item.medFreq}</span>
                  <span>{item.nextDose}</span>
                </div>
                <button className={styles.deleteMedBtn}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.doctorsListContainer}>
        <div className={styles.doctorsList}>
          <div className={styles.bluePart}>
            <div>
              <h3>Doctors List</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className={styles.whitePart}>
            {InviteDoctorsData.map((item) => (
              <div key={item.id} className={styles.adoctor}>
                <div className={styles.profileContainer}>
                  <div className={styles.patientspfp}>
                    <img src={malepfp} alt="" />
                  </div>
                  <div className={styles.profileInfo}>
                    <Button
                      w="fit-content"
                      p="4px 13px"
                      bg="#A6CBFA"
                      title="Change"
                    />
                    <span>{item.doctorName}</span>
                    <span>{item.proffesion}</span>
                    <span>{item.email}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button fs="18px" h="52px" title="Invite Doctors" bg="#024DAD" />
          </div>
        </div>
        <div>
          <h3>Personal Details</h3>
          <div className={styles.patientProfile}>
            <div className={styles.profileContainer}>
              <div className={styles.patientspfp}>
                <img src={pfp} alt="" />
              </div>
              <div className={styles.profileInfo}>
                <span>Brad Shit</span>
                <span>shit@gmail.com</span>
              </div>
            </div>
            <div className={styles.keyInfo}>
              <div className={styles.detailKey}>
                <span>File Number</span>
                <span>53536373</span>
              </div>
              <div className={styles.detailKey}>
                <span>Date</span>
                <span>6646474</span>
              </div>
              <div className={styles.detailKey}>
                <span>Status</span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} onClose={onClose}>
        <div
          className={styles.modalpopup}
          style={{ background: "white", borderRadius: "20px" }}>
          <div className={styles.nxtForm}>
            <h3>Medication Information</h3>
            <form className={styles.medicationInfo} onSubmit={onSubmit}>
              <div className={styles.formControl}>
                <label>Name of medication</label>
                <input
                  type="text"
                  placeholder="Name of medication"
                  id="medicationName"
                  onChange={onChange}
                  value={medicationName}
                />
              </div>
              <div className={styles.formControl1}>
                <div className={styles.formControlgroup}>
                  <label>Start Date</label>
                  <input
                    type="date"
                    placeholder="Start Date"
                    id="startDate"
                    onChange={onChange}
                    value={startDate}
                  />
                </div>
                <div className={styles.formControlgroup}>
                  <label>End Date</label>
                  <input
                    type="date"
                    placeholder="End Date"
                    id="endDate"
                    onChange={onChange}
                    value={endDate}
                  />
                </div>
              </div>
              <div className={styles.formControl}>
                <label>Prescribed by</label>
                <input
                  type="text"
                  placeholder="Prescribed by"
                  id="prescribedBy"
                  onChange={onChange}
                  value={prescribedBy}
                />
              </div>
              <div className={styles.formControl1}>
                <div className={styles.formControlgroup}>
                  <label>Dosage Strength</label>
                  <input
                    type="text"
                    placeholder="Dosage Strength"
                    id="dosageStrength"
                    onChange={onChange}
                    value={dosageStrength}
                  />
                </div>
                <div className={styles.formControlgroup}>
                  <label>Dosage Form</label>
                  <select
                    id="dosageForm"
                    onChange={onChange}
                    value={dosageForm}>
                    <option >Choose Form</option>
                    <option>Capsule</option>
                    <option>Tablet</option>
                    <option>Syrup</option>
                    <option>Ointment</option>
                  </select>
                </div>
              </div>
              <div className={styles.btnposition}>
                <Button
                  type='submit'
                  fs="18px"
                  h="52px"
                  w="400px"
                  ftw="500"
                  color="#024DAD"
                  bg="#A6CBFA"
                  title="Add Medication"
                />
              </div>
            </form>
            <Link to="/pdashboard"></Link>
          </div>
        </div>
      </Modal>
      <Modal isOpen={open2} onClose={onClose2}>
        <div
          className={styles.modalpopup}
          style={{ background: "white", borderRadius: "20px" }}>
          <div className={styles.nxtForm}>
            <h3>Create Reminder</h3>
            <form className={styles.medicationInfo}>
              <div className={styles.formControl}>
                <label>Name of medication</label>
                <input type="text" placeholder="Name of medication" />
              </div>
              <div className={styles.formControl1}>
                <div className={styles.formControlgroup}>
                  <label>Start Date</label>
                  <input type="text" placeholder="Start Date" />
                </div>
                <div className={styles.formControlgroup}>
                  <label>End Date</label>
                  <input type="text" placeholder="End Date" />
                </div>
              </div>
              <div className={styles.formControl}>
                <label>Prescribed by</label>
                <input type="text" placeholder="Prescribed by" />
              </div>
              <div className={styles.btnposition}>
                <Button
                  fs="18px"
                  h="52px"
                  w="400px"
                  ftw="500"
                  color="#024DAD"
                  bg="#A6CBFA"
                  title="Set Reminder"
                />
              </div>
            </form>
            <Link to="/pdashboard"></Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PatientsOverview;
