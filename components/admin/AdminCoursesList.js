import React, { useState } from "react";
import { useSelector } from "react-redux";
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

  return (
    <div className="container-fluid m-3">
      {admin.role === "admin" ? (
        <div>
          <div className="row">
            {admin ? (
              <div className="col-8">
                <AdminCourseTable />{" "}
              </div>
            ) : (
              <p> No Courses found. </p>
            )}
            <div className="col-4 text-center">
              <button
                style={{ margin: "15px" }}
                className="btn btn-outline-primary"
                onClick={handleClick}
              >
                <BsFillBookmarkPlusFill size="15px" /> Create Course
              </button>
              {isClicked && <AdminCourseForm handleClick={handleClick} />}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminCoursesList;
