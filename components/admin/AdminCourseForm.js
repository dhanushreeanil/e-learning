import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { startRegisterAdmin } from "../../actions/adminAction";

const AdminCourseForm = (props) => {
  const dispatch = useDispatch();

  const redirect = () => {
    props.history.push("/");
  };

  const initialValues = {
    name: "",
    description: "",
    author: "",
    category: [],
    level: "",
    isDelete: false,
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(startRegisterAdmin(values, redirect));
    console.log("formdata-values", values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required *"),
    description: Yup.string().required("Required *"),
    author: Yup.string().required("Required *"),
    name: Yup.string().required("Required *"),
    // category: Yup.array().oneOf([true], "Required *"),
    // level: Yup.boolean().required("Required *").oneOf([true]),
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
            class="form-control"
            name="description"
            placeholder="description"
            as="textarea"
          />
          <ErrorMessage name="description" />
          <br />
          <div className="form-group form-check">
            <Field
              style={{ margin: "5px" }}
              type="checkbox"
              name="isDelete"
              className="form-check-input"
              id="isDelete"
            />
            <label htmlFor="isDelete" className="form-check-label">
              {" "}
              IsDelete{" "}
            </label>
            <ErrorMessage name="isDelete" />
            <br />
          </div>
          <div className="checkbox-group"> Catergory</div>
          <label>
            <Field
              style={{
                margin: "10px",
                padding: "3px",
                display: "inline-block",
              }}
              type="checkbox"
              name="category"
              value="html"
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
              type="checkbox"
              name="category"
              value="css"
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
              type="checkbox"
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
              type="checkbox"
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
              type="checkbox"
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
              type="checkbox"
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
              type="checkbox"
              name="category"
              value="mongodb"
            />{" "}
            Mongo DB
          </label>
          <br />
          <ErrorMessage name="category" />
          <div className="radio-group"> Levels </div>
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
          <Field
            className="btn btn-outline-secondary"
            style={{ margin: "5px" }}
            type="submit"
            name="edit"
            value="Edit"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AdminCourseForm;
