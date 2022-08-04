import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import Job from "./Job";

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }

  return (
    <div className="container">
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <Link to="/">Go To Home</Link>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </div>
  );
};

export default JobsContainer;
