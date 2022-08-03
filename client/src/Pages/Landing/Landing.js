import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/register">
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            background: "gray",
            border: "1px solid gray",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          login / register
        </button>
      </Link>
    </div>
  );
};

export default Landing;
