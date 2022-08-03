import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

const Dashboard = () => {
  const { user, logoutUser } = useAppContext();
  return (
    <div>
      <h1>This IS Dashboard Page</h1>
      <h3>{user.name}</h3>
      <Link to="/profile">Go To Profile</Link> <br />
      <Button onClick={logoutUser}>Logout</Button>
    </div>
  );
};

export default Dashboard;
