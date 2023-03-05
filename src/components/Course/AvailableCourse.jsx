import Card from "../UI/Card";
import classes from "./AvailableCourse.module.css";
import CourseItem from "./CourseItem/CourseItem";
import DUMMY_COURSE from "../../store/Data";

const AvailableCourse = () => {
  const courseList = DUMMY_COURSE.map((course) => (
    <CourseItem
      id={course.id}
      key={course.id}
      image={course.photo}
      name={course.name}
      description={course.description}
      price={course.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{courseList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCourse;
