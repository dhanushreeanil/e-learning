import axios from "axios";

export const startRegisterStudent = (formData) => {
  return (dispatch) => {
    axios
      .post(
        `https://dct-e-learning.herokuapp.com/api/admin/students`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        const result = response.data;
        console.log("student register", result);
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          alert(`successfully created account`);
          dispatch(startGetStudents());
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in register post api", error);
      });
  };
};

// login

export const startLoginStudent = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post(`https://dct-e-learning.herokuapp.com/api/students/login`, formData)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          localStorage.setItem("token", result.token);
          dispatch(startGetStudent(result));
          redirect();
          alert(`successfully Logged-In`);
          console.log("login-action - result", result);
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in login post api", error);
      });
  };
};

// get single student

export const startGetStudent = () => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api/students/:id`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          console.log("login-successfull", result);
          // dispatch(setStudent(result));
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
};

// get all students

export const startGetStudents = () => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api/admin/students`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          console.log("all-students", result);
          dispatch(setStudents(result));
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
};

export const setStudents = (students) => {
  console.log("set-students", students);
  return {
    type: "SET_STUDENTS",
    payload: students,
  };
};

// remove note

export const startRemoveStudent = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(removeStudent(result._id));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const removeStudent = (id) => {
  console.log("remove-student", id);
  return {
    type: "REMOVE_STUDENT",
    payload: id,
  };
};
