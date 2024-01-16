import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Registerpage.module.css";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../images/sing2img.png";
import AuthContext from "../context/AuthContext";

function Login() {
  const { formData, onChange } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const validateForm = () => {
    // Validate each field individually

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.trim() !== "";

    // Update isValid state based on all validation checks
    // setIsValid(isEmailValid && isPasswordValid);

    // Return true if all fields are valid, otherwise false
    return isEmailValid && isPasswordValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Invalid Credentials");
      return;
    } else if (isValid) {
      toast.success('Welcome');
      fetchData();
    }
  };

  const fetchData = async () => {
    
      let url = "https://digital-healthcare-solution-v1.onrender.com/api/token/obtain/";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      try {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);
      if (data.user_type === "HP") {
        navigate("/ddashboard");
      } else {
        navigate("/pdashboard");
      }
    } catch (error) {
      toast.error("User not Found");
      navigate("/");
    }
  };

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
          <input onChange={onChange} id="email" value={email} type="text" />
        </div>
        <div className={styles.formControl}>
          <label>Password</label>
          <input
            onChange={onChange}
            value={password}
            id="password"
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
            <label>Remember Me</label>
          </div>
          <span>Forgot Password?</span>
        </div>
        <Link to="/cprofile">
          <button onClick={onSubmit} className={styles.createBtn}>
            Log in
          </button>
        </Link>

        <Link className={styles.link} to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default Login;


// {/* <style> */}
    /* customizable snowflake styling */
    // {/* .snowflake {
    //   color: #ffff;
    //   font-size: 1em;
    //   font-family: Arial, sans-serif;
    //   text-shadow: 0 0 5px #000;
    // } */}

    // @-webkit-keyframes snowflakes-fall {
    //   0% {
    //     top: -10%
    //   }

    //   100% {
    //     top: 100%
    //   }
    // }

  //   @-webkit-keyframes snowflakes-shake {

  //     0%,
  //     100% {
  //       -webkit-transform: translateX(0);
  //       transform: translateX(0)
  //     }

  //     50% {
  //       -webkit-transform: translateX(80px);
  //       transform: translateX(80px)
  //     }
  //   }

  //   @keyframes snowflakes-fall {
  //     0% {
  //       top: -10%
  //     }

  //     100% {
  //       top: 100%
  //     }
  //   }

  //   @keyframes snowflakes-shake {

  //     0%,
  //     100% {
  //       transform: translateX(0)
  //     }

  //     50% {
  //       transform: translateX(80px)
  //     }
  //   }

  //   .snowflake {
  //     position: fixed;
  //     top: -10%;
  //     z-index: 9999;
  //     -webkit-user-select: none;
  //     -moz-user-select: none;
  //     -ms-user-select: none;
  //     user-select: none;
  //     cursor: default;
  //     -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  //     -webkit-animation-duration: 10s, 3s;
  //     -webkit-animation-timing-function: linear, ease-in-out;
  //     -webkit-animation-iteration-count: infinite, infinite;
  //     -webkit-animation-play-state: running, running;
  //     animation-name: snowflakes-fall, snowflakes-shake;
  //     animation-duration: 10s, 3s;
  //     animation-timing-function: linear, ease-in-out;
  //     animation-iteration-count: infinite, infinite;
  //     animation-play-state: running, running
  //   }

  //   .snowflake:nth-of-type(0) {
  //     left: 1%;
  //     -webkit-animation-delay: 0s, 0s;
  //     animation-delay: 0s, 0s
  //   }

  //   .snowflake:nth-of-type(1) {
  //     left: 10%;
  //     -webkit-animation-delay: 1s, 1s;
  //     animation-delay: 1s, 1s
  //   }

  //   .snowflake:nth-of-type(2) {
  //     left: 20%;
  //     -webkit-animation-delay: 6s, .5s;
  //     animation-delay: 6s, .5s
  //   }

  //   .snowflake:nth-of-type(3) {
  //     left: 30%;
  //     -webkit-animation-delay: 4s, 2s;
  //     animation-delay: 4s, 2s
  //   }

  //   .snowflake:nth-of-type(4) {
  //     left: 40%;
  //     -webkit-animation-delay: 2s, 2s;
  //     animation-delay: 2s, 2s
  //   }

  //   .snowflake:nth-of-type(5) {
  //     left: 50%;
  //     -webkit-animation-delay: 8s, 3s;
  //     animation-delay: 8s, 3s
  //   }

  //   .snowflake:nth-of-type(6) {
  //     left: 60%;
  //     -webkit-animation-delay: 6s, 2s;
  //     animation-delay: 6s, 2s
  //   }

  //   .snowflake:nth-of-type(7) {
  //     left: 70%;
  //     -webkit-animation-delay: 2.5s, 1s;
  //     animation-delay: 2.5s, 1s
  //   }

  //   .snowflake:nth-of-type(8) {
  //     left: 80%;
  //     -webkit-animation-delay: 1s, 0s;
  //     animation-delay: 1s, 0s
  //   }

  //   .snowflake:nth-of-type(9) {
  //     left: 90%;
  //     -webkit-animation-delay: 3s, 1.5s;
  //     animation-delay: 3s, 1.5s
  //   }

  //   .snowflake:nth-of-type(10) {
  //     left: 25%;
  //     -webkit-animation-delay: 2s, 0s;
  //     animation-delay: 2s, 0s
  //   }

  //   .snowflake:nth-of-type(11) {
  //     left: 65%;
  //     -webkit-animation-delay: 4s, 2.5s;
  //     animation-delay: 4s, 2.5s
  //   }
  // </style>
  // <div class="snowflakes" aria-hidden="true">
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  //   <div class="snowflake">
  //     ❅
  //   </div>
  //   <div class="snowflake">
  //     ❆
  //   </div>
  // </div>
