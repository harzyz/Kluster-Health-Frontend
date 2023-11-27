import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import styles from "./Registerpage.module.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });

  const { name, email, password, user_type } = formData;

  const onChange = (e) => {
    // console.log(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()
    let url = 'https://digital-healthcare-solution-v1.onrender.com/api/register/'

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      toast.success('Registered' + data.message);
      if(formData.user_type === 'PT'){
        navigate('/cprofile');
      }else{
        navigate('/cdprofile')
      }
    })
    .catch((err) => {
      // toast.error('Failed');
    });
    console.log(formData)
  }

 

  return (
    <div className={styles.formsContainer}>
      <h2>Sign Up</h2>
      <ToastContainer />
      <form className={styles.regForm}>
        <select onChange={onChange} value={user_type} name="user_type" id='user_type'>
          <option value="">Choose Role</option>
          <option value="PT">Patient</option>
          <option value="HP">Health</option>
        </select>
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
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}>
            show
          </span>
        </div>

        {/* <Link> */}
          <button onClick={onSubmit} type='submit' className={styles.createBtn}>Create an Account</button>
        {/* </Link> */}
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
