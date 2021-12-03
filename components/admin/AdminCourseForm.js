import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

import { startCourseAdmin } from "../../actions/AdminCourseAction";

const AdminCourseForm = (props) => {
  const dispatch = useDispatch();

  const redirect = () => {
    props.history.push("/");
  };

  const initialValues = {
    name: "",
    description: "",
    duration: 0,
    releaseDate: "",
    isDelete: false,
    category: "",
    validity: 0,
    level: "",
    author: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(startCourseAdmin(values, redirect));
    alert(`successfully created course`);
    console.log("formdata-values", values);
    onSubmitProps.resetForm();
    props.handleClick();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required *"),
    description: Yup.string().required("Required *"),
    duration: Yup.number().required("Required *"),
    author: Yup.string().required("Required *"),
    category: Yup.string().required("Required *"),
    level: Yup.string().required("Required *"),
    validity: Yup.number().required("Required *"),
  });

  return (
    <div className="container-fluid">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-group input-group-sm" style={{ width: "50%" }}>
          <Field
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter course name"
          />
          <ErrorMessage name="name" />
          <br />
          <Field
            className="form-control"
            name="description"
            placeholder="description"
            as="textarea"
          />
          <ErrorMessage name="description" />
          <br />
          <Field
            className="form-control"
            type="number"
            name="duration"
            placeholder="Enter duration"
          />
          <ErrorMessage name="duration" />
          <br />
          <Field
            className="form-control"
            type="number"
            name="validity"
            placeholder="Enter validity"
          />
          <ErrorMessage name="validity" />
          <br />
          <Field
            className="form-control"
            type="text"
            name="releaseDate"
            placeholder="release date in yyyy/MM/dd format"
          />
          <ErrorMessage name="releaseDate" />
          <br />
          <div style={{ margin: "10px" }} className="form-group">
            <Field
              style={{ margin: "5px" }}
              type="checkbox"
              name="isDelete"
              className="form-check-input"
              id="isDelete"
            />
            <label htmlFor="isDelete" className="form-check-label text-muted">
              {" "}
              IsDelete{" "}
            </label>
            <ErrorMessage name="isDelete" />
            <br />
          </div>
          <div className="radio-group text-muted"> Catergory</div>
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="HTML"
            />{" "}
            HTML
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="CSS"
            />{" "}
            CSS
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="javascript"
            />{" "}
            JavaScript
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="reactjs"
            />{" "}
            React Js
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="expressjs"
            />{" "}
            Express Js
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="nodejs"
            />{" "}
            Node Js
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="category"
              value="mongodb"
            />{" "}
            Mongo DB
          </label>
          <br />
          <ErrorMessage name="category" />
          <div className="radio-group text-muted"> Levels </div>
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="level"
              value="beginner"
            />
            Beginner
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="level"
              value="intermediate"
            />
            Intermediate
          </label>
          <br />
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="radio"
              name="level"
              value="expert"
            />
            Expert
          </label>
          <ErrorMessage name="level" />
          <br />
          <Field
            className="form-control"
            type="text"
            name="author"
            placeholder="Enter author name"
          />
          <ErrorMessage name="author" />
          <br />
          <Field
            className="btn btn-outline-primary"
            style={{ margin: "5px" }}
            type="submit"
            name="register"
            value="Register"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AdminCourseForm;
