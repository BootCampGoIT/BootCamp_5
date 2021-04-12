import React from "react";

const CourseListItem = ({ name, duration, level, id, deleteCourse }) => {
  const deleteItem = () => {
    deleteCourse(id);
  };

  return (
    <li className='courseLIstItem'>
      <h3>{name}</h3>
      <p>{duration}</p>
      <p>{level}</p>
      <button type='button' onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

export default CourseListItem;
