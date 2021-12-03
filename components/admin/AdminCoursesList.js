import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import AdminCourseTable from "./AdminCourseTable";
import AdminCourseForm from "./AdminCourseForm";

const AdminCoursesList = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const admin = useSelector((state) => {
    return state.admin;
  });
  // console.log("admin-account", admin);

  return (
    <div>
      {admin.role === "admin" ? (
        <div>
          <button
            style={{ margin: "15px" }}
            className="btn btn-outline-primary"
            onClick={handleClick}
          >
            <BsFillBookmarkPlusFill size="15px" /> Add Course
          </button>
          {isClicked && <AdminCourseForm handleClick={handleClick} />}
          {admin ? <AdminCourseTable /> : <p> No Courses found. </p>}
        </div>
      ) : null}
    </div>
  );
};

export default AdminCoursesList;
