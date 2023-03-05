import React from "react";
import Header from "../Layout/Header";
import Footer from '../Layout/Footer'
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <Header />

      <div className={classes.container}>
        <div className={classes.about_us}>
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are a company dedicated to providing
            top-quality courses and content to our students. Our mission is
            to exceed your knowledge and provide you with the best possible
            experience.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team is made up of experienced professionals who are passionate
            about what they do. From our customer service representatives to our
            product specialists, everyone on our team is committed to providing
            you with the best possible service.
          </p>
          <h2>Our History</h2>
          <p>
            We have been in business for over 10 years and have built a
            reputation for excellence in our industry.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Quality Courses</li>
            <li>Student satisfaction</li>
            <li>Innovation</li>
            <li>Community involvement</li>
          </ul>
          <p>
            These values guide everything we do and are the foundation of our
            success.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
