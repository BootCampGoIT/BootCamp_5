import axios from "axios";

const getCourses = async () => {
  try {
    const response = await axios.get(
      `https://bootcamp5-default-rtdb.firebaseio.com/courses.json`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const addCourseItem = async (course) => {
  try {
    const response = await axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/courses.json`,
      course
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCourseItem = async (id) => {
  try {
    await axios.delete(
      `https://bootcamp5-default-rtdb.firebaseio.com/courses/${id}.json`
    );
  } catch (error) {
    throw new Error(error);
  }
};

export { getCourses, addCourseItem, deleteCourseItem };
