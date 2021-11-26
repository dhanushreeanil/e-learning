import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCourseForm from "./AdminCourseForm";

const AdminCoursesList = (props) => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const admin = useSelector((state) => {
    return state.admin;
  });
  console.log("admin-account", admin);

  return (
    <div>
      <button
        style={{ margin: "15px" }}
        className="btn btn-outline-primary"
        onClick={handleClick}
      >
        Add Course
      </button>
      {isClicked && <AdminCourseForm />}
    </div>
  );
};

export default AdminCoursesList;
