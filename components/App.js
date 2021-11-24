import React, { useState, useEffect } from "react";

import "../App.css";
import NavBar from "./NavBar";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleAuth();
    }
  }, []);

  // const [isAdmin, setIsAdmin] = useState(false);

  // const handleAdmin = () => {
  //   setIsAdmin(!isAdmin);
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("adminToken")) {
  //     handleAdmin();
  //   }
  // }, []);

  return (
    <div className="container">
      <NavBar
        handleAuth={handleAuth}
        isLoggedIn={isLoggedIn}
        // isAdmin={isAdmin}
        // handleAdmin={handleAdmin}
      />
    </div>
  );
};

export default App;
