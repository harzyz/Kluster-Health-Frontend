import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import image from "../images/signupImg.png";
import styles from "./Registerpage.module.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()
  
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });

  const { name, email, password, user_type } = formData;

  const onChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  };

  const validateForm = () => {
    // Validate each field individually
    const isNameValid = name.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.trim() !== '';
    const isUserTypeValid = user_type !== '';

    // Update isValid state based on all validation checks
    setIsValid(isNameValid && isEmailValid && isPasswordValid && isUserTypeValid);

    // Return true if all fields are valid, otherwise false
    return isNameValid && isEmailValid && isPasswordValid && isUserTypeValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      // Display an error message or handle invalid form submission
      toast.error('Please fill in all required fields');
      return;
    }else{
      setIsValid(true);
      toast.success('Registered');
    }
  
  
    if (isValid) {
      if (formData.user_type === 'HP') {
        fetchData();
        navigate('/cdprofile');
      } else {
        fetchData();
        navigate('/cprofile');
      }
    }
  };

  const fetchData = () => {
    let url = 'https://digital-healthcare-solution-v1.onrender.com/api/register/'

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())
    .then((data) => {
      


      toast.success('Registered');
      console.log(data.message)
      
    })
    .catch((err) => {
      toast.error('Failed',err);
      navigate('/signup')
    });
    console.log(formData)
  }

 

  return (
    <div className={styles.formsContainer}>
      <ToastContainer />
      <h2>Sign Up</h2>
      <img className={styles.remove} src={image} alt="" />
      <form className={styles.regForm}>
        <select onChange={onChange} value={user_type} name="user_type" id='user_type'>
          <option value="">Choose Role</option>
          <option value="PT">Patient</option>
          <option value="HP">Health</option>
        </select>
        {!isValid && <p style={{ color: 'red' }}>Please select a valid option</p>}
        <div className={styles.formControl}>
          <label htmlFor="">Full Name</label>
          <input onChange={onChange} name='name' id='name' value={name} type="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Email</label>
          <input onChange={onChange} name='email' id='email' value={email} type="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Password</label>
          <input
            onChange={onChange}
            value={password}
            id='password'
            name='password'
            type={showPassword ? "text" : "password"}
          />
          <span
            className={styles.show}
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}>
            show
          </span>
        </div>

        {/* <Link> */}
          <div className={styles.btnWrapper}>
            <button onClick={onSubmit} type='submit' className={styles.createBtn}>Create an Account</button>
          </div>
        {/* </Link> */}
      </form>
      <Link className={styles.link} to="/">Login</Link>
    </div>
  );
}

export default Signup;
