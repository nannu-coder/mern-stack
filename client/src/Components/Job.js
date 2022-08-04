import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useAppContext } from "../Context/AppContext";

const Job = ({ _id, position, company, jobType, createdAt, status }) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <>
      <div className="col">
        <div className="card h-100">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">{position}</h5>
            <h6>{company}</h6>
            <p className="card-text">
              <span>{status}</span> <br />
              <span>{jobType}</span> <br />
              <span>{date}</span>
            </p>
          </div>
          <div className="card-footer">
            <Link
              to="/addjob"
              onClick={() => setEditJob(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
