// import { Component } from "react";
import { Link } from "react-router-dom";
import "./frontpagebody.css";

const FrontPageBody = (props) => {
  const { trailsFun } = props;
  const onCreateButtonClicked = () => {
    trailsFun();
  };

  return (
    <div className="front-body-container">
      <h3 className="ai-powered-body-heading">
        AI-POWERED RESUME MAKER ONLINE
      </h3>
      <h1 className="body-quote-heading">
        The Fastest Way to Create a Professional Resume
      </h1>
      <p className="body-passage">
        Create a resume in just minutes with our easy to use resume maker onine.
        Let AI do the writting for you and download a perfect resume-no sign-up
        required!{" "}
      </p>
      <div className="create-resume-button-container">
        <Link to="/resume-page">
          <button
            className="create-resume-button button1"
            onClick={onCreateButtonClicked}
          >
            CREATE A RESUME
          </button>
        </Link>
        <p className="no-sign-up-text">NO SIGN-UP REQUIRED</p>
      </div>
      <p className="trems-passage">
        By Pressing "Create a Resume" you agree to our Privacy Policy
      </p>
    </div>
  );
};

export default FrontPageBody;
