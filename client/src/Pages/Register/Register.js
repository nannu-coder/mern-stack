import React, { useState, useEffect } from "react";
import { FormRow } from "../../Components";
import { Button } from "react-bootstrap";
import Alert from "../../Components/Alert";
import { useAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);
  const {
    showAlert,
    displayAlert,
    isLoading,
    user,
    setupUser,
  } = useAppContext();
  const navigate = useNavigate();

  // global context and useNavigate later

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }

    console.log(e.target);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div className="form-field">
      <h3>{values.isMember ? "Please Login" : "Please Register"}</h3>
      {showAlert && <Alert />}
      <form onSubmit={onSubmit}>
        {/* Name Field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email Field */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        {/* Password Field */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <Button type="submit" className="mt-3 d-block" disabled={isLoading}>
          Submit
        </Button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
