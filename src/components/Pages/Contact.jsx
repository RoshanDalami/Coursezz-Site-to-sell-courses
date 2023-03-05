import React from "react";
import Header from "../Layout/Header";
import classes from "./Contact.module.css";

const Contact = () => {
  const submitHandler =(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1>Contact Us</h1>
        <p>
          Feel free to get in touch with us if you have any questions or
          comments. We're always happy to hear from our Students.
        </p>
        <form onClick={submitHandler}>
          <div className={classes.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" className={classes.submit_button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
