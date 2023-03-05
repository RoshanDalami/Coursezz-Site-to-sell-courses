import React from "react";
import AvailableCourse from "./AvailableCourse";
import CourseSummary from "./CourseSummary";

const Meals = (props) => {
  return(
    <React.Fragment>
    <CourseSummary />
    <AvailableCourse />
  </React.Fragment>
  );
  
};

export default Meals;
