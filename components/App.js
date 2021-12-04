import React, { useState, useEffect } from "react";

import "../App.css";
import Home from "./Home";
import NavBar from "./NavBar";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container-fluid">
      <NavBar handleAuth={handleAuth} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
