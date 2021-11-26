import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import {
  startGetStudents,
  startRemoveStudent,
} from "../../actions/studentAction";

const StudentsTable = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetStudents());
  }, []);

  const students = useSelector((state) => {
    return state.students;
  });

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      dispatch(startRemoveStudent(id));
    }
  };
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr className="active">
            <th>Name</th>
            <th>Email</th>
            <th>Courses </th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student._id}>
                <td> {student.name} </td>
                <td> {student.email} </td>
                <td> {student.courses} </td>
                <td> {student.role} </td>
                <td>
                  <button className="btn btn-outline-secondary btn-sm">
                    <FaUserEdit size="15px" />
                    {/* edit */}
                  </button>
                  <button
                    style={{ margin: "5px" }}
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      handleRemove(student._id);
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

export default StudentsTable;
