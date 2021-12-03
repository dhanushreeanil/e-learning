import React, { useState } from "react";
import { useSelector } from "react-redux";

import AdminRegister from "./AdminRegister";

const AdminAccount = (props) => {
  const [toggle, setToggle] = useState(false);

  const admin = useSelector((state) => {
    return state.admin;
  });

  // console.log("admin-account", admin);

  const handleEdit = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <button
        type="button"
        style={{ margin: "15px" }}
        className="btn btn-secondary"
        onClick={handleEdit}
        value="edit"
      >
        {" "}
        Edit{" "}
      </button>
      {toggle ? (
        <>
          <AdminRegister
            email={admin.email}
            username={admin.username}
            name={admin.academy.name}
            website={admin.academy.website}
            role={admin.role}
            handleEdit={handleEdit}
          />
        </>
      ) : (
        <>
          <p className="display-6" style={{ margin: "20px" }}>
            Account Details{" "}
          </p>
          <div>
            <p>
              Email - <strong> {admin.email} </strong>
            </p>
            <p>
              Username - <strong> {admin.username} </strong>{" "}
            </p>
            <p>
              {" "}
              Role - <strong> {admin.role} </strong>{" "}
            </p>
            <p>
              Academy - <strong> {admin.academy && admin.academy.name} </strong>
            </p>
            <p>
              {" "}
              Academy Website -{" "}
              <strong> {admin.academy && admin.academy.website} </strong>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAccount;
