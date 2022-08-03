import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 style={{ fontSize: "104px", textAlign: "center" }}>404</h1>
      <h2 style={{ fontSize: "90px", textAlign: "center" }}>Not Found</h2>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
