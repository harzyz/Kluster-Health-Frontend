import React, { useState } from "react";
import { toast } from 'react-toastify';
import styles from "./Registerpage.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password} = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()
    let url = 'https://digital-healthcare-solution-v1.onrender.com/api/token/obtain'

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())  // Parse the response as JSON
    .then((data) => {
      console.log(data)
      toast.success('Registered' + data.message);  // Adjust here based on your response structure
      navigate('/pdashboard');
    })
    .catch((err) => {
      // toast.error('Failed');
    });
    console.log(formData)
  }


  return (
    <div className={styles.formsContainer}>
      <h2>Welcome</h2>
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
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}>
            show
          </span>
        </div>
        <div className={styles.forgotPassword}>
          <div className={styles.rememberMe}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <span>Forgot Password?</span>
        </div>
        <Link to='/cprofile'><button onClick={onSubmit} className={styles.createBtn}>Log in</button></Link>

        <Link to='/signup'>Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;