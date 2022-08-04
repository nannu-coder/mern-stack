import React from "react";
import Alert from "../../Components/Alert";
import FormRow from "../../Components/FormRow";
import { useAppContext } from "../../Context/AppContext";
import { Button } from "react-bootstrap";
import FormRowSelect from "../../Components/FormRowSelect";
import { Link } from "react-router-dom";

const AddJobs = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    isLoading,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <div>
      <form className="form-box">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          {/* <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          /> */}
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className="btn-container">
            <Button
              type="submit"
              className="btn btn-block submit-btn mt-3"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </Button>
            <Button
              className="btn btn-block clear-btn mt-3 ms-3"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </Button>
          </div>
        </div>
      </form>
      <Link to="/">Go To Home</Link>
    </div>
  );
};

export default AddJobs;
