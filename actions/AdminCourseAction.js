import axios from "axios";
import swal from "sweetalert";

// create course

export const startCourseAdmin = (formData) => {
  return (dispatch) => {
    axios
      .post(`https://dct-e-learning.herokuapp.com/api/courses`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        console.log("course-api", result);
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(startGetCoursesAdmin());
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in register post api", error);
      });
  };
};

// get all courses

export const startGetCoursesAdmin = () => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api/courses`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        console.log("all courses-api", result);
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(setCourses(result));
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in register post api", error);
      });
  };
};

// set courses

export const setCourses = (courses) => {
  console.log("set courses", courses);
  return {
    type: "SET_COURSES",
    payload: courses,
  };
};

// get course

export const startGetCourse = (id) => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        console.log("couse get single", result);
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          swal({
            title: `${result.name}`,
            text: `name : ${result.name},
              description : ${result.description},
              duration : ${result.duration} months,
              releaseDate : ${result.createdAt.substring(0, 10)},
              isDelete : ${result.isDelete},
              category : ${result.category},
              validity : ${result.validity} months,
              level : ${result.level},
              author : ${result.author}`,
            button: "cancel",
          });
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in register post api", error);
      });
  };
};

// set course

export const setCourse = (course) => {
  console.log("set course", course);
  return {
    type: "SET_COURSE",
    payload: course,
  };
};

// remove note

export const startRemoveCourse = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(removeCourse(result._id));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const removeCourse = (id) => {
  console.log("remove-course", id);
  return {
    type: "REMOVE_COURSE",
    payload: id,
  };
};
