import axios from "axios";

// register

export const startRegisterAdmin = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post(`https://dct-e-learning.herokuapp.com/api/admin/register`, formData)
      .then((response) => {
        const result = response.data;
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

export const startLoginAdmin = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post(`https://dct-e-learning.herokuapp.com/api/admin/login`, formData)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          localStorage.setItem("token", result.token);
          dispatch(startGetadmin());
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

// get admin account

export const startGetadmin = () => {
  return (dispatch) => {
    axios
      .get(`https://dct-e-learning.herokuapp.com/api/admin/account`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          dispatch(setAdmin(result));
          console.log("get admin", result);
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
};

// set admin

export const setAdmin = (admin) => {
  console.log("set-admin", admin);
  return {
    type: "SET_ADMIN",
    payload: admin,
  };
};

// update admin

export const startUpdateAdmin = (formData, handleEdit) => {
  return (dispatch) => {
    axios
      .put(`https://dct-e-learning.herokuapp.com/api/admin`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          dispatch(editAdmin(result));
          handleEdit();
          console.log("update admin - result", result);
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log("error in login post api", error);
      });
  };
};

// // edit admin

export const editAdmin = (admin) => {
  console.log("edit-admin", admin);
  return {
    type: "EDIT_ADMIN",
    payload: admin,
  };
};
