import axios from "axios";
import React, { Component } from "react";
import "./mypdf.css";

class Mypdf extends Component {
  state = { dataVal: [], profilePicUrl: "" };

  getUsers = async () => {
    const response = await axios.get("http://localhost:5000/datapdf");
    if (response.status === 200) {
      this.setState({ dataVal: response.data });
    }
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { dataVal } = this.state;
    const { profileUrl } = this.props;

    console.log(profileUrl, "last");

    if (dataVal.disRole === false) {
      const disRoleDisEle = document.getElementById("disRole");
      disRoleDisEle.classList.add("dis-element");
    }

    if (dataVal.disAbout === false) {
      const disAboutDisEle = document.getElementById("disAbout");
      disAboutDisEle.classList.add("dis-element");
    }

    if (dataVal.disEmail === false) {
      const disEmailDisEle = document.getElementById("disEmail");
      disEmailDisEle.classList.add("dis-element");
    }

    if (dataVal.disPhone === false) {
      const disPhoneDisEle = document.getElementById("disPhone");
      disPhoneDisEle.classList.add("dis-element");
    }

    if (dataVal.disLinkedin === false) {
      const disLinkedinDisEle = document.getElementById("disLinkedin");
      disLinkedinDisEle.classList.add("dis-element");
    }

    if (dataVal.disSkills === false) {
      const disSkillsDisEle = document.getElementById("disSkills");
      disSkillsDisEle.classList.add("dis-element");
    }

    if (dataVal.disAwards === false) {
      const honorDisEle = document.getElementById("honorDis");
      honorDisEle.classList.add("dis-element");
    }

    return (
      <div>
        {" "}
        <div className="main-cont-22">
          <div className="img-text-cont">
            <div id="disProfile" className="">
              <img className="profile-img" alt="img1" src={profileUrl} />
            </div>
            <div className="main-text-cont">
              <h1 className="main-head-name">{this.state.dataVal.name}</h1>

              <p id="disRole" className="main-role">
                {this.state.dataVal.profession}
              </p>
              <p id="disAbout" className="main-para">
                {this.state.dataVal.aboutHeadline}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <hr className="hr-line-top1" />
            <div className="email-phone-cont all-para-font-email">
              <div id="disEmail" className="icon-text-cont">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <p className="each-margin-email">{this.state.dataVal.email}</p>
              </div>
              <div id="disPhone" className="icon-text-cont">
                <div>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <p className="each-margin-email">{this.state.dataVal.phone}</p>
              </div>
              <div id="disLinkedin" className="icon-text-cont">
                <div>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <p className="each-margin-email">
                  {this.state.dataVal.linkedin}
                </p>
              </div>
            </div>
            <hr className="hr-line-top2" />
          </div>
          <div className="work-skills-cont">
            <div className="work-cont">
              <h1 className="all-side-head">WORK EXPERIENCE</h1>
              <div id="workExp">
                {this.state.dataVal.workExpTotal &&
                  this.state.dataVal.workExpTotal.map((num, index) => (
                    <React.Fragment key={index}>
                      <p className="all-side-side-head-sub">
                        {num.positionVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-side-side-head-sub2">
                        {num.employerVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-para-font">
                        {num.fromDateValue} - {num.toDateValue}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-para-font-work extra-margin-map">
                        {num.workVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                    </React.Fragment>
                  ))}
              </div>
            </div>

            <div className="skills-other-cont">
              <div id="disSkills" className="skills-cont">
                <h1 className="all-side-head skills-margin">SKILLS</h1>
                <div className="each-skills-cont" id="skills1">
                  {this.state.dataVal.totalSkills &&
                    this.state.dataVal.totalSkills.map((num, index) => (
                      <p key={index} className="each-skills">
                        {num.skill}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                    ))}
                </div>
              </div>
              <div className="honour-cont" id="honorDis">
                <h1 className="all-side-head">HONOR AWARDS</h1>
                <div id="honor">
                  {this.state.dataVal.awardTotal &&
                    this.state.dataVal.awardTotal.map((num, index) => (
                      <React.Fragment key={index}>
                        <p className="all-side-side-head-sub">
                          {num.awardName}
                          <span style={{ fontSize: "1px", color: "white" }}>
                            #
                          </span>
                        </p>
                        <p className="all-side-side-head-sub2 extra-margin-map">
                          {num.Organization}
                          <span style={{ fontSize: "1px", color: "white" }}>
                            #
                          </span>
                        </p>
                      </React.Fragment>
                    ))}
                </div>
              </div>

              <div>
                <h1 className="all-side-head">EDUCATION</h1>
                <p>hellow {this.state.profilePicUrl}</p>
                <div id="education">
                  {this.state.dataVal.educationTotal &&
                    this.state.dataVal.educationTotal.map((num, index) => (
                      <React.Fragment key={index}>
                        <p className="all-side-side-head-sub">
                          {num.degreeVal}
                          <span style={{ fontSize: "1px", color: "white" }}>
                            #
                          </span>
                        </p>
                        <p className="all-side-side-head-sub2">
                          {num.schoolVal}
                          <span style={{ fontSize: "1px", color: "white" }}>
                            #
                          </span>
                        </p>
                        <p className="all-para-font extra-margin-map">
                          {num.fromSchoolVal} - {num.toSchoolVal}
                          <span style={{ fontSize: "1px", color: "white" }}>
                            #
                          </span>
                        </p>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypdf;
