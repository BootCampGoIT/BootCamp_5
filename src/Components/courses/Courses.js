import React, { Component } from "react";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";
import {
  addCourseItem,
  deleteCourseItem,
  getCourses,
} from "../../services/CoursesAPI";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";

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
        <ul className='innerNavigationList'>
          <li className='innerNavigationListItem'>
            <NavLink
              to={`${this.props.match.url}/create`}
              className='innerNavigationLink'
              activeClassName='activeInnerNavigationLink'>
              Create
            </NavLink>
          </li>
          <li className='innerNavigationListItem'>
            <NavLink
              to={`${this.props.match.url}/list`}
              className='innerNavigationLink'
              activeClassName='activeInnerNavigationLink'>
              List
            </NavLink>
          </li>
        </ul>
        
        <Switch>
          <Route
            path={`${this.props.match.url}/create`}
            render={() => <CoursesForm addCourse={this.addCourse} />}
          />

          <Route
            path={`${this.props.match.url}/list`}
            render={() => (
              <CoursesList courses={courses} deleteCourse={this.deleteCourse} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(Courses);

// const hof = () => () => console.log("Hello");

// const newFunc = hof()();

// function getData() {
//   return function () {
//     console.log("first");
//     return function (data) {
//       console.log(data);
//       return function () {
//         console.log("Hello");
//       };
//     };
//   };
// }

// const getData = (data) => (newData) => () => console.log(data + " " + newData);

// getData("Hello")("World")();
