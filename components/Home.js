import React from "react";
import home from "../assets/home.jpg";
import { BsClock } from "react-icons/bs";

const Home = (props) => {
  const handleStart = () => {
    props.history.push("/login");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <p className="display-6">EMPOWER YOURSELF</p>
          <p
            className="display-6"
            style={{ fontSize: "20px", lineHeight: "1rem" }}
          >
            Learning is more effective when it is{" "}
            <code>
              <strong>active</strong>
            </code>
          </p>

          <div>
            <p
              className="display-6"
              style={{ backgroundColor: "#d8edfa", textAlign: "center" }}
            >
              Learn On Your Schedule <BsClock size="25px" />
              <br />
              <p
                className="display-6"
                style={{ fontSize: "18px", marginBottom: "0px" }}
              >
                Anywhere ... Anytime ... Start Learning Today ...
              </p>
              <button
                style={{ backgroundColor: "rgb(52 71 135)", color: "white" }}
                className="btn"
                onClick={() => {
                  handleStart();
                }}
              >
                Get Started
              </button>
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src={home}
            alt="home"
            style={{ width: "600px", height: "450px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
