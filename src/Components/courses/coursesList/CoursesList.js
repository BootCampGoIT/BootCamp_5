import React from "react";
import CourseListItem from "./courseListItem/CourseListItem";

const CoursesList = ({ courses, deleteCourse }) => {
  return (
    <ul className='coursesList'>
      {courses.map((course) => (
        <CourseListItem
          key={course.id}
          {...course}
          deleteCourse={deleteCourse}
        />
      ))}
    </ul>
  );
};

export default CoursesList;
