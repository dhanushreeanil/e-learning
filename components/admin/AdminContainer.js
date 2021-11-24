import React, { useState, useEffect } from "react";

// import AdminNavBar from './AdminNavBar'

const AdminContainer = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      handleAuth();
    }
  }, []);

  return (
    <div>
      {/* <AdminNavBar handleAuth = { handleAuth } isLoggedIn = { isLoggedIn } /> */}
    </div>
  );
};

export default AdminContainer;
