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
  console.log("admin", admin);

  const redirect = () => {
    props.history.push("/");
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    if (admin.role === "admin") {
      const result = { ...values, isAllowed: true };
      dispatch(startRegisterStudent(result, redirect));
      console.log("formdata-values", result);
    } else {
      // alert("cannot create accunt as you are not admin")
      console.log("cannot create accunt as you are not admin");
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
      <div className="jumbotron">
        <h2> Register With Us</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {/* automatically links handleSubmit event to method passed into formik */}
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
            className="btn btn-success"
            type="submit"
            name="register"
            value="Register"
          />
          <Field
            className="btn btn-primary"
            type="submit"
            name="edit"
            value="Edit"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default StudentRegister;
