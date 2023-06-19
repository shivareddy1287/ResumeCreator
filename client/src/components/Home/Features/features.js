import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { Component } from "react";

import "./features.css";

class Features extends Component {
  render() {
    return (
      <div className="feature-container">
        <hr />
        <h4 className="features-heading">Features</h4>
        <div className="features-top-container">
          <h1>The Best Resume Maker in 2023</h1>
          <p>
            Our Online resume maker is designed to help you makethe perfect
            resume, no matter what stage of your career you're in.With a range
            of powerful features and a user friendly interface, you'll able to
            create a professional resume in just a few minutes
          </p>
        </div>
        <div className="features-options-container">
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">AI Resume writting Assistent</h3>
            <p className="option-passage">
              Use artificial intelligence to write an error-free resume in no
              time.Simly input your role and et AI do the rest
            </p>
          </div>
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">Easy to use for any Skill level</h3>
            <p className="option-passage">
              Whether you're atech-savvy job seeker or new to resume
              building,creating a same resume has never been easier with our
              simple step-by-step-guidence.
            </p>
          </div>
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">ATS-friendly</h3>
            <p className="option-passage">
              Designed with applicant traking systems (ATS) in mind,you can be
              confident that ypur resume will make it throughthe application
              processand getseen by right people.
            </p>
          </div>
        </div>
        <div className="features-options-container">
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">AI Resume writting Assistent</h3>
            <p className="option-passage">
              Use artificial intelligence to write an error-free resume in no
              time.Simly input your role and et AI do the rest
            </p>
          </div>
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">AI Resume writting Assistent</h3>
            <p className="option-passage">
              Use artificial intelligence to write an error-free resume in no
              time.Simly input your role and et AI do the rest
            </p>
          </div>
          <div className="feature-option">
            <FontAwesomeIcon icon={faCircleCheck} />
            <h3 className="option-heading">AI Resume writting Assistent</h3>
            <p className="option-passage">
              Use artificial intelligence to write an error-free resume in no
              time.Simly input your role and et AI do the rest
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
