import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/form.css";

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
        <Form className="form-group input-group-sm" style={{ width: "100%" }}>
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="text"
            name="name"
            placeholder="Enter course name"
          />
          <ErrorMessage name="name" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            name="description"
            placeholder="description"
            as="textarea"
          />
          <ErrorMessage name="description" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="number"
            name="duration"
            placeholder="Enter duration"
          />
          <ErrorMessage name="duration" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="number"
            name="validity"
            placeholder="Enter validity"
          />
          <ErrorMessage name="validity" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="text"
            name="releaseDate"
            placeholder="release date in yyyy/MM/dd format"
          />
          <ErrorMessage name="releaseDate" />
          <br />
          <Field
            as="select"
            name="category"
            className="form-select form-select-lg text-muted"
          >
            <option value="">select Course </option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React JS</option>
            <option value="nodejs">Node JS</option>
            <option value="expressjs">Express JS</option>
            <option value="mongodb">MongoDb</option>
          </Field>
          <ErrorMessage name="category" />
          <br />
          <Field
            as="select"
            name="level"
            className="form-select form-select-lg text-muted"
          >
            <option value="">select Level </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </Field>
          <ErrorMessage name="level" />
          <br />
          <Field
            className="form-control"
            style={{ width: "100%" }}
            type="text"
            name="author"
            placeholder="Enter author name"
          />
          <ErrorMessage name="author" />
          <br />
          <div className="form-group form-check" style={{ width: "25%" }}>
            <Field
              type="checkbox"
              name="isDelete"
              className="form-check-input"
              id="isDelete"
            />
            <label htmlFor="isDelete" className="form-check-label text-muted">
              isDelete
            </label>
            <ErrorMessage name="isDelete" />
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

export default AdminCourseForm;
