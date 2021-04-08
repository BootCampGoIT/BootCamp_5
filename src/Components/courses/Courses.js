import React, { Component } from "react";
import CoursesForm from "./coursesForm/CoursesForm";
import { v4 as uuidv4 } from "uuid";
import CoursesList from "./coursesList/CoursesList";

class Courses extends Component {
  state = {
    courses: [],
    filter: "",
  };

  addCourse = (course) => {
    this.setState((prevState) => ({
      courses: [...prevState.courses, { ...course, id: uuidv4() }],
    }));
  };

  deleteCourse = (id) => {
    this.setState((prevState) => ({
      courses: prevState.courses.filter((course) => course.id !== id),
    }));
  };

  render() {
    const { courses, filter } = this.state;
    return (
      <>
        <CoursesForm addCourse={this.addCourse} />
        <CoursesList courses={courses} deleteCourse={this.deleteCourse} />
        {/* <Filter filter={filter} /> */}
      </>
    );
  }
}

export default Courses;
