import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import {
  startGetCoursesAdmin,
  startRemoveCourse,
  startGetCourse,
} from "../../actions/AdminCourseAction";

const AdminCourseTable = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetCoursesAdmin());
  }, []);

  const courses = useSelector((state) => {
    return state.courses;
  });
  console.log("courses table", courses);

  const handleShow = (id) => {
    console.log("handleshow", id);
    dispatch(startGetCourse(id));
  };

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      dispatch(startRemoveCourse(id));
    }
  };

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr className="active">
            <th>Name</th>
            <th>Description</th>
            <th> Students </th>
            <th> Details </th>
            <th> Enroll/Unenroll </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course._id}>
                <td> {course.name} </td>
                <td> {course.description} </td>
                <td>
                  {course.students.lenght >= 0 ? course.students : <p> nil </p>}
                </td>
                <td>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-info btn-sm"
                    onClick={() => {
                      handleShow(course._id);
                    }}
                  >
                    {" "}
                    details
                  </button>{" "}
                </td>
                <td>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-success btn-sm"
                    onClick={() => {
                      // handleEdit(course);
                    }}
                  >
                    {" "}
                    enroll
                  </button>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      // handleRemove(course._id);
                    }}
                  >
                    {" "}
                    unenroll
                  </button>
                </td>
                <td>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      // handleEdit(course);
                    }}
                  >
                    <FaUserEdit size="15px" />
                  </button>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      handleRemove(course._id);
                    }}
                  >
                    <MdDelete size="15px" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourseTable;
