import React from "react";
import Header from "../Layout/Header";


import classes from "./Support.module.css";
const Support = () => {
  return (
    <>
      <Header />
      <div className={classes.support_us}>
        <h1>Support Us</h1>
        <p>
          Thank you for considering supporting our organization. Your
          contributions will help us continue to provide top-quality Courses and
          content to our consumer.
        </p>
        <h2>Ways to Support Us</h2>
        <ul>
          <li>Make a donation</li>
          <li>Volunteer your time</li>
          <li>Spread the word about us on social media</li>
          <li>Donate for cup of coffee</li>
        </ul>
        <p>
          Whatever way you choose to support us, we appreciate your help in
          advancing our mission.
        </p>
        <button className={classes.donate_button}>Donate Now</button>
      </div>
      
    </>
  );
};

export default Support;
