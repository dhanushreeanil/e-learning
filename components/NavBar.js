import React, { useEffect } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import Home from "./Home";
import AdminRegister from "./admin/AdminRegister";
import Login from "./admin/AdminLogin";
import AdminAccount from "./admin/AdminAccount";
import AdminCoursesList from "./admin/AdminCoursesList";
import StudentLogin from "./students/StudentLogin";
import StudentList from "./students/StudentList";
import { startGetadmin } from "../actions/adminAction";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  const { isLoggedIn, handleAuth } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(startGetadmin(token));
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            REACH ACADEMY
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/admin"
                >
                  {" "}
                  Admin{" "}
                </Link>

                {isLoggedIn ? (
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/account">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/courses">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/students">
                        Student
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.removeItem("token");
                          alert(`successfully logged-out.`);
                          handleAuth();
                          props.history.push("/");
                        }}
                      >
                        {" "}
                        Logout
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/register">
                        {" "}
                        Register{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/login">
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/student"
                >
                  {" "}
                  Student{" "}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/student/login">
                      {" "}
                      Login{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/admin/register" component={AdminRegister} />
      <Route
        exact
        path="/admin/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
      />
      <Route
        exact
        path="/admin/account"
        render={(props) => {
          return <AdminAccount {...props} isLoggedIn={isLoggedIn} />;
        }}
      />
      <Route
        exact
        path="/admin/courses"
        render={(props) => {
          return <AdminCoursesList {...props} isLoggedIn={isLoggedIn} />;
        }}
      />
      <Route
        exact
        path="/admin/students"
        render={(props) => {
          return <StudentList {...props} isLoggedIn={isLoggedIn} />;
        }}
      />
      <Route path="/student/login" component={StudentLogin} />
    </div>
  );
};

export default withRouter(NavBar);
