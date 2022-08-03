import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "../../Components/Alert";
import FormRow from "../../Components/FormRow";
import { useAppContext } from "../../Context/AppContext";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ name, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Link to="/">Home</Link>
        <h3>profile </h3>
        {showAlert && <Alert />}

        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />

        <FormRow
          type="text"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="btn btn-block mt-3"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Please Wait..." : "save changes"}
        </Button>
      </form>
    </div>
  );
};

export default Profile;
