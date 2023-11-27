import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PatientProfileCreate.module.css";
import profImg from "../../images/profileBgimg.png";

function PatientProfileCreate() {
  const inputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");

  const handleImgUpload = () => {
    console.log(inputRef);
    inputRef.current.click();
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setProfileImage(file);
  };
  return (
    <div className={styles.wrapper}>
      <h2>Profile Creation</h2>
      <p>
        Fill in the required information to get started with your profile
        creation.
      </p>

      <div className={styles.inWrapper}>
        <div className={styles.inContain}>
          <div className={styles.contain}>
            <div className={styles.uploadContainer}>
              <div className={styles.imgUpload} onClick={handleImgUpload}>
                {profileImage ? (
                  <img src={URL.createObjectURL(profileImage)} alt="" />
                ) : (
                  <img src={profImg} alt="" />
                )}
                <input onChange={handleImgChange} type="file" ref={inputRef} />
              </div>
              <button onClick={handleImgUpload} className={styles.imgUploadBtn}>
                Add Profile Picture
              </button>
            </div>
            <div className={styles.bio}>
              <h2>Bio</h2>
              <form className={styles.bioform}>
                <div className={styles.formControl}>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className={styles.formControl}>
                  <input type="text" placeholder="Date of Birth" />
                </div>
                <div className={styles.formControl}>
                  <input type="text" placeholder="Gender" />
                </div>
                <div className={styles.formControl}>
                  <textarea placeholder="Alergies (drug specific)" name="" id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.prevForm}>
            <form className={styles.formGroup}>
              <div className={styles.formControl}>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className={styles.formControl}>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className={styles.formControl}>
                <input type="text" placeholder="Address" />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.nxtForm}>
          <form className={styles.medicationInfo}>
            <div className={styles.formControl}>
              <input type="text" placeholder="Name of medication" />  
            </div>
            <div className={styles.formControl1}>
              <div className={styles.formControlgroup}>
                <input type="text" placeholder="Start Date" /> 
              </div>
              <div className={styles.formControlgroup}>
                <input type="text" placeholder="End Date" /> 
              </div>
            </div>
            <div className={styles.formControl}>
              <input type="text" placeholder="Prescribed by" /> 
            </div>
            <div className={styles.formControl}>
              <input type="text" placeholder="Prescribed in" />  
            </div>
            <div className={styles.formControl1}>
              <div className={styles.formControlgroup}>
                <input type="text" placeholder="Dosage Strength" />  
              </div>
              <div className={styles.formControlgroup}>
                <input type="text" placeholder="Dosage Form" /> 
              </div>
            </div>
            <div className={styles.formControl}>
              <input type="text" placeholder="Administration Route" /> 
            </div>
            <div className={styles.formControl}>
              <input type="text" placeholder="Administration Frequency" /> 
            </div>
          </form>
              <Link to="/pdashboard">
                <button className={styles.createBtn}>Create an Account</button>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientProfileCreate;
