import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/form.css";

import { startRegisterStudent } from "../../actions/studentAction";

const StudentRegister = (props) => {
  // const {
  //   name: studentName,
  //   email: studentEmail,
  //   isAllowed: studentIsAllowed,
  // } = props;

  const dispatch = useDispatch();

  const admin = useSelector((state) => {
    return state.admin;
  });
  // console.log("admin", admin);

  const initialValues = {
    // name: studentName ? studentEmail : "",
    // email: studentEmail ? studentEmail : "",
    name: "",
    email: "",
    password: "",
    isAllowed: false,
    // isAllowed: studentIsAllowed ? studentIsAllowed : false,
  };

  const onSubmit = (values, onSubmitProps) => {
    if (admin.role === "admin") {
      dispatch(startRegisterStudent(values));
      console.log("formdata-values", values);
      props.handleRegister();
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
        <Form className="form-group input-group-sm" style={{ width: "100%" }}>
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" />
          <br />
          <div className="form-group form-check" style={{ width: "25%" }}>
            <Field
              type="checkbox"
              name="isAllowed"
              className="form-check-input"
              id="isAllowed"
            />
            <label htmlFor="isAllowed" className="form-check-label text-muted">
              isAllowed
            </label>
            <ErrorMessage name="isAllowed" />
            <br />
          </div>
          <Field
            className="btn btn-outline-primary m-3"
            style={{ width: "50%" }}
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
