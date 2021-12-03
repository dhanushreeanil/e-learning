import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { startRegisterStudent } from "../../actions/studentAction";

const StudentRegister = (props) => {
  const dispatch = useDispatch();

  const admin = useSelector((state) => {
    return state.admin;
  });
  // console.log("admin", admin);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    if (admin.role === "admin") {
      const result = { ...values, isAllowed: true };
      dispatch(startRegisterStudent(result));
      // console.log("formdata-values", result);
    } else {
      console.log("cannot create account as you are not admin");
    }
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required*"),
    email: Yup.string().email("Invalid email format").required("Required*"),
    password: Yup.string().required("Required*"),
  });

  return (
    <div className="container-fluid">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-group" style={{ width: "50%" }}>
          <Field
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" />
          <br />
          <Field
            className="form-control"
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" />
          <br />
          <Field
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" />
          <br />
          <Field
            className="btn btn-outline-primary"
            type="submit"
            name="register"
            value="Register"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default StudentRegister;
