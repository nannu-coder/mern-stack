import React from "react";
import { useAppContext } from "../Context/AppContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      style={{ width: "500px", textAlign: "center" }}
      className={`alert alert-${alertType}`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
