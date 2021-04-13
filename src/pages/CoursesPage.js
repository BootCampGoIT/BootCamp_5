import React from "react";
import Courses from "../Components/courses/Courses";

const CoursesPage = ({ history, location, match }) => {
  const goHome = () => {
    // history.push("/");
    history.push({
      pathname: "/",
      search: `search=cats`,
      state: {
        data: { name: "Alex" },
      },
      adasdasdasdasd: "value",
      hash: "casts",
    });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Courses />
      <button type='button' onClick={goHome}>
        Go Home
      </button>
      <button type='button' onClick={goBack}>
        Go back
      </button>
    </>
  );
};

export default CoursesPage;
