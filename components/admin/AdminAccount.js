import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetadmin } from "../../actions/adminAction";

const AdminAccount = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetadmin());
  }, []);

  const admin = useSelector((state) => {
    return state.admin;
  });
  // console.log("admin-account", admin);

  return (
    <div className="container">
      <p className="display-6" style={{ margin: "20px" }}>
        Account Details{" "}
      </p>
      {admin.role === "admin" ? (
        <div>
          <p>
            {" "}
            Email - <strong> {admin.email} </strong>{" "}
          </p>
          <p>
            {" "}
            Username - <strong> {admin.username} </strong>{" "}
          </p>
          <p>
            {" "}
            Role - <strong> {admin.role} </strong>{" "}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default AdminAccount;
