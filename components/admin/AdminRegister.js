import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { startRegisterAdmin } from "../../actions/adminAction";

const AdminRegister = (props) => {
  const dispatch = useDispatch();

  const redirect = () => {
    props.history.push("/admin/login");
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    academy: {
      name: "",
      website: "",
    },
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(startRegisterAdmin(values, redirect));
    console.log("formdata-values", values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required*"),
    email: Yup.string().email("Invalid email format").required("Required*"),
    password: Yup.string().required("Required*"),
    name: Yup.string().required("Required"),
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
            name="username"
            placeholder="Enter username"
          />
          <ErrorMessage name="username" />
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
            className="form-control"
            type="text"
            name="academy.name"
            placeholder="Enter academy name"
          />
          <ErrorMessage name="academy.name" />
          <br />
          <Field
            className="form-control"
            type="text"
            name="academy.website"
            placeholder="Enter website name"
          />
          <ErrorMessage name="academy.website" />
          <br />
          <Field
            className="btn btn-primary"
            type="submit"
            name="register"
            value="Register"
          />
          <Field
            className="btn btn-warning"
            type="submit"
            name="edit"
            value="Edit"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AdminRegister;
