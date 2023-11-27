import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../patientspages/PatientProfileCreate.module.css";
import profImg from "../../images/profileBgimg.png";

function DoctorsProfileCreate() {
  const inputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    gender: "",
    clinic_affiliation: "",
    specialization: "",
    license_id: "",
  });

  const onChange = (e) => {
    // console.log(e.target.value);
    setProfileForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  };


  const {
    name,
    email,
    phone_number,
    address,
    gender,
    clinic_affiliation,
    specialization,
    license_id,
  } = profileForm;

  const handleImgUpload = () => {
    // console.log(inputRef);
    inputRef.current.click();
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setProfileImage(file);
    // reader.onloadend = () => {
    //   // The result property contains the data as a data URL
      
    // };

    // Read the file as a data URL
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  console.log(profileImage, 'profileImage')

  const onSubmit = (e) => {
    e.preventDefault()
    const authToken = localStorage.getItem('token');
    let url = 'https://digital-healthcare-solution-v1.onrender.com/api/healthcare-provider/'
    const payload = {
      ...profileForm,
      profile_picture: profileImage,
    }
    console.log(payload, 'payload')
    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then((res) => res.json())
    .then((data) => {

    })
    .catch((err) => {
      
    });
    console.log(profileForm)
  }

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
                <input id="profile_picture" onChange={handleImgChange} type="file" ref={inputRef} />
              </div>
              <button onClick={handleImgUpload} className={styles.imgUploadBtn}>
                Add Profile Picture
              </button>
            </div>
            <div className={styles.bio}>
              <h2>Bio</h2>
              <form className={styles.bioform}>
                <div className={styles.formControl}>
                  <input onChange={onChange} id="name" value={name} type="text" placeholder="Full Name" />
                </div>
                <div className={styles.formControl}>
                  <input onChange={onChange} id="clinic_affiliation" value={clinic_affiliation} type="text" placeholder="Hospital / Clinic" />
                </div>
                <div className={styles.formControl}>
                  <select
                    onChange={onChange}
                    value={gender}
                    name="user_type"
                    id="gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
                <div className={styles.formControl}>
                  <input onChange={onChange} id="specialization" value={specialization} type="text" placeholder="Specialization" />
                </div>
                <div className={styles.formControl}>
                  <input onChange={onChange} id="license_id" value={license_id} type="text" placeholder="License Number" />
                </div>
              </form>
            </div>
          </div>
          <div className={styles.prevForm}>
            <form className={styles.formGroup}>
              <div className={styles.formControl}>
                <input onChange={onChange} id="email" value={email} type="text" placeholder="Email Address" />
              </div>
              <div className={styles.formControl}>
                <input
                  onChange={onChange}
                  id="phone_number"
                  value={phone_number}
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.formControl}>
                <input onChange={onChange} id="address" value={address} type="text" placeholder="Address" />
              </div>
            </form>
          </div>
        </div>

        <Link to="/ddashboard">
          <button onClick={onSubmit} className={styles.createBtn}>Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorsProfileCreate;
