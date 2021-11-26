import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { startLoginStudent } from "../../actions/studentAction";

const StudentLogin = (props) => {
  const dispatch = useDispatch();

  const redirect = () => {
    props.history.push("/");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(startLoginStudent(values, redirect));
    console.log("formdata-values", values);
    onSubmitProps.resetForm();
    props.handleAuth();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required*"),
    password: Yup.string().required("Required*"),
  });

  return (
    <div className="container-fluid">
      <div className="display-6">
        <p style={{ margin: "20px" }}> Login With Us</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-group" style={{ width: "50%" }}>
          {/* automatically links handleSubmit event to method passed into formik */}
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
            style={{ margin: "5px" }}
            type="submit"
            value="Login"
          />
          <Field
            className="btn btn-outline-danger"
            style={{ margin: "5px" }}
            type="submit"
            value="Cancel"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default StudentLogin;
