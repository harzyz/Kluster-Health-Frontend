import React, { useState, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Registerpage.module.css";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../images/sing2img.png";
import AuthContext from "../context/AuthContext";

function Login() {

  const { formData, onChange } = useContext(AuthContext)
  const navigate = useNavigate()

  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  

  const { email, password} = formData;

  

  const validateForm = () => {
    // Validate each field individually
    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.trim() !== '';

    // Update isValid state based on all validation checks
    // setIsValid(isEmailValid && isPasswordValid);

    // Return true if all fields are valid, otherwise false
    return isEmailValid && isPasswordValid;
  };

  const onSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Display an error message or handle invalid form submission
      toast.error('Please fill in all required fields');
      return;
    }else if(isValid){
      toast.success('Welcome');
      setIsValid(true);
      fetchData();
    }
  
  }
  
  // if (isValid) {
  //   if (formData.user_type === 'HP') {
  //     fetchData();
  //     navigate('/ddashboard');
  //   } else {
  //     fetchData();
  //     navigate('/pdashboard');
  //   }
  // }
  
  const fetchData = () => {
    let url = 'https://digital-healthcare-solution-v1.onrender.com/api/token/obtain'

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      // toast.success('Welcome'); 
      localStorage.setItem('token', data.access)
      localStorage.setItem('token', data.refresh)
      if(data.user_type === 'HP'){
        navigate('/ddashboard')
      }else{
        navigate('/pdashboard')
      }
    })
    .catch((err) => {
      toast.error('User not Found')
      navigate('/')
    });
    console.log(formData)
  }


  return (
    <div className={styles.formsContainer}>
      <ToastContainer />
      <h2>Welcome</h2>
      <div className={styles.removestyle}>
        <img className={styles.remove} src={image1} alt="" />
      </div>
      <form className={styles.regForm}>
        <div className={styles.formControl}>
          <label>Email</label>
          <input onChange={onChange} id='email' value={email} type="text" />
        </div>
        <div className={styles.formControl}>
          <label>Password</label>
          <input
            onChange={onChange}
            value={password}
            id='password'
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
        <div className={styles.forgotPassword}>
          <div className={styles.rememberMe}>
            <input type="checkbox" name="" id="" />
            <label >Remember Me</label>
          </div>
          <span>Forgot Password?</span>
        </div>
        <Link to='/cprofile'><button onClick={onSubmit} className={styles.createBtn}>Log in</button></Link>

        <Link className={styles.link} to='/signup'>Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;
