import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";

import StudentRegister from "./StudentRegister";
import StudentsTable from "./StudentsTable";

const StudentList = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const admin = useSelector((state) => {
    return state.admin;
  });

  // const students = useSelector((state) => {
  //   return state.students;
  // });

  const handleRegister = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {admin.role === "admin" ? (
        <div>
          <button
            style={{ margin: "15px" }}
            className="btn btn-outline-primary"
            onClick={handleRegister}
          >
            <FaUserPlus size="15px" /> Add Student
          </button>
          {isClicked && <StudentRegister />}
          {admin && <StudentsTable />}
        </div>
      ) : null}
    </div>
  );
};

export default StudentList;
