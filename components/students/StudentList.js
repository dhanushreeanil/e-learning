import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";

import StudentRegister from "./StudentRegister";
import StudentsTable from "./StudentsTable";

const StudentList = (props) => {
  const [isAddStudent, setisAddStudent] = useState(false);

  const admin = useSelector((state) => {
    return state.admin;
  });

  const handleRegister = () => {
    setisAddStudent(!isAddStudent);
  };

  return (
    <div className="container-fluid m-3">
      {admin.role === "admin" ? (
        <div className="row">
          <div className="col-8">
            <StudentsTable />
          </div>
          <div className="col-4 text-center">
            <button
              style={{ margin: "15px" }}
              className="btn btn-outline-primary"
              onClick={handleRegister}
            >
              {" "}
              <FaUserPlus size="15px" /> Add Student
            </button>
            {isAddStudent && (
              <StudentRegister handleRegister={handleRegister} />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StudentList;
