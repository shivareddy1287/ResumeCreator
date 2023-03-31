import { Component } from "react";
import "./frontpagefaq.css";
class FrequentlyAskedQuestions extends Component {
  render() {
    return (
      <div className="faq-container">
        <div className="faq-head-cont">
          <span className="faq-span-heading">FAQ</span>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div>
          <h3 className="faq-qest-head">How to Write a resume with AI?</h3>
          <p className="faq-passage">
            To write a resume using artificial intelligence, you'll need to
            click on AI Assistant Button, which is available for your profile,
            work experience and skills sections
          </p>
          <hr />
          <h3 className="faq-qest-head">How Long Should resume be?</h3>
          <p className="faq-passage">
            A Resume Should be kept in a single page as it allows employer to
            quick review the applicants qualifications and experience without
            getting overwhlmed by unnessary details.
          </p>
          <hr />
          <h3 className="faq-qest-head">What to put on a resume?</h3>
          <p className="faq-passage">
            When creating a resume, it's important to include ony the relevent
            information for the role you're applying for, such as your
            education, work experience, skills and achivements.
          </p>
          <hr />
          <h3 className="faq-qest-head">How should a resume look?</h3>
          <p className="faq-passage">
            When it comes to the appearence of a resume, simplicity and
            readablity are key, andit's generally best to avoid overly creative
            design elements that could be distracting or hard to read.
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

export default FrequentlyAskedQuestions;
