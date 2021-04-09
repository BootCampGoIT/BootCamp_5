import React, { Component } from "react";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";
import axios from "axios";
import {
  addCourseItem,
  deleteCourseItem,
  getCourses,
} from "../../services/Api";

class Courses extends Component {
  state = {
    courses: [],
    isLoading: false,
    filter: "",
    isCourseFormOpen: false,
    error: "",
  };

  toggleForm = () =>
    this.setState((prevState) => ({
      isCourseFormOpen: !prevState.isCourseFormOpen,
    }));

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await getCourses();
      if (response.data) {
        const courses = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        this.setState({ courses });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state.isCourseFormOpen);
  //   console.log(nextState.isCourseFormOpen);
  //   if (this.state.isCourseFormOpen !== nextState.isCourseFormOpen) {
  //     return true;
  //   } else return false;
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.group("componentDidUpdate");
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    // console.groupEnd();
    // localStorage.setItem("courses", JSON.stringify(this.state.courses));
    // if (prevState.courses.length !== this.state.courses.length) {
    //   localStorage.setItem("courses", JSON.stringify(this.state.courses));
    // }
  }

  addCourse = async (course) => {
    this.setState({ isLoading: true });
    try {
      const response = await addCourseItem(course);
      this.setState((prevState) => ({
        courses: [...prevState.courses, { ...course, id: response.data.name }],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteCourse = async (id) => {
    this.setState({ isLoading: true });
    try {
      await deleteCourseItem(id);
      this.setState((prevState) => ({
        courses: prevState.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { courses, isLoading, isCourseFormOpen, error } = this.state;
    return (
      <>
        {isLoading && <h2>...loading</h2>}
        {error && <h2>{error}</h2>}
        <button type='button' onClick={this.toggleForm}>
          {!isCourseFormOpen ? "Open" : "Close"}
        </button>
        {isCourseFormOpen && <CoursesForm addCourse={this.addCourse} />}
        <CoursesList courses={courses} deleteCourse={this.deleteCourse} />
        {/* <Filter filter={filter} /> */}
      </>
    );
  }
}

export default Courses;
