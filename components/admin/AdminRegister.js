import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  startRegisterAdmin,
  startUpdateAdmin,
} from "../../actions/adminAction";

const AdminRegister = (props) => {
  const {
    username: adminUsername,
    email: adminEmail,
    name: academyName,
    website: academyWebsite,
    role,
    handleEdit,
  } = props;

  console.log("props", props);

  const dispatch = useDispatch();

  const redirect = () => {
    props.history.push("/admin/login");
  };

  const initialValues = {
    username: adminUsername ? adminUsername : "",
    email: adminEmail ? adminEmail : "",
    password: "",
    academy: {
      name: academyName ? academyName : "",
      website: academyWebsite ? academyWebsite : "",
    },
  };
  console.log("initialvalues", initialValues);

  const validationSchema = Yup.object({
    username: Yup.string().required("Required*"),
    email: Yup.string().email("Invalid email format").required("Required*"),
    password: role !== "admin" && Yup.string().required("Required*"),
    name: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("formdata-values", values);
    // console.log("id", admin._id);

    if (role === "admin") {
      dispatch(startUpdateAdmin(values, handleEdit));
    } else {
      dispatch(startRegisterAdmin(values, redirect));
    }

    onSubmitProps.resetForm();
  };

  return (
    <div className="container-fluid">
      <div className="display-6">
        <p style={{ margin: "20px" }}>
          {role === "admin" ? "Edit Admin Info" : "Register With Us"}
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-group" style={{ width: "50%" }}>
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
          {!role && (
            <>
              <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" /> <br />
            </>
          )}
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
          {role === "admin" ? (
            <Field
              className="btn btn-outline-secondary"
              style={{ margin: "5px" }}
              type="submit"
              name="update"
              value="update"
            />
          ) : (
            <Field
              className="btn btn-outline-primary"
              style={{ margin: "5px" }}
              type="submit"
              name="register"
              value="Register"
            />
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default AdminRegister;
