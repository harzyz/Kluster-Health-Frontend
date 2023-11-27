import React from "react";
import styles from "./Registerpage.module.css";
import image from "../images/signupImg.png";
import crossSvg from "../images/cross dark blue.png";
import circleSvg from "../images/circle.png";
import firstAidbx from "../images/doctor's first aid kit.png";
import redCross from "../images/red cross sign.png";

function Registerpage({children}) {

  return (
    <div className={styles.wrapper}>
      <section className={styles.regInstructions}>
        <div className={styles.regImg}>
          <div className={styles.circleSvg}>
            <img src={circleSvg} alt="" />
          </div>
          <div className={styles.crossSvg}>
            <img src={crossSvg} alt="" />
          </div>
          <img src={image} alt="" />
        </div>
        <div className={styles.whatWedo}>
          <img className={styles.firstAid} src={firstAidbx} alt="" />
          <img className={styles.redCross} src={redCross} alt="" />
          <h1 className={styles.head}>
            We are fully focused in helping you as a <br /> healthcare provider
            or patient:
          </h1>
          <ul>
            <li>Available 24/7.</li>
            <li>Expert advice.</li>
            <li>Medication tracking.</li>
            <li>Health tracking and check-up.</li>
            <li>What would you want to do?</li>
            <li>What would you want to do?</li>
          </ul>
        </div>
      </section>
      <section className={styles.forms}>
      {children}
      </section>
    </div>
  );
}

export default Registerpage;

// import { useState } from 'react'
// const [role, setRole] = useState(true)