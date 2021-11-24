import axios from "axios";

export const startRegisterStudent = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post(
        `https://dct-e-learning.herokuapp.com/api/admin/students`,
        {
          headers: {
            Authorization: localStorage.getItem("adminToken"),
          },
        },
        formData
      )
      .then((response) => {
        const result = response.data;
        console.log("student register", result);
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          alert(`successfully created account`);
          redirect();
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
          localStorage.setItem("studentToken", result.token);
          dispatch(startGetStudent());
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

export const startGetStudent = () => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api//students/:id`, {
        headers: {
          Authorization: localStorage.getItem("studentToken"),
        },
      })
      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          dispatch(setStudent(result));
          console.log("login-successfull", result);
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
};

export const setStudent = (student) => {
  console.log("set-student", student);
  return {
    type: "SET_STUDENT",
    payload: student,
  };
};
