import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  state = {
    degree: this.props.details.degreeVal,
    school: this.props.details.schoolVal,
    fromUntilSchool: this.props.details.fromUntilSchoolVal,
  };

  inputRefEducationSchool = React.createRef();
  inputRefEduFrom = React.createRef();
  inputRefEnterCity = React.createRef();

  onDeletess = (OnDeleteMainEducation, idss) => {
    OnDeleteMainEducation(idss);
  };

  onDegree = (e) => {
    this.setState({ degree: e.target.value });
    this.props.onChangeValMainEducation(
      e.target.value,
      this.state.school,
      this.state.fromUntilSchool,
      this.props.details.idss
    );
  };

  onSchool = (e) => {
    this.setState({ school: e.target.value });
    this.props.onChangeValMainEducation(
      this.state.degree,
      e.target.value,
      this.state.fromUntilSchool,
      this.props.details.idss
    );
  };

  onFromUntil = (e) => {
    this.setState({ fromUntilSchool: e.target.value });
    this.props.onChangeValMainEducation(
      this.state.degree,
      this.state.school,
      e.target.value,
      this.props.details.idss
    );
  };

  render() {
    const { details, OnDeleteMainEducation, checkLen } = this.props;

    const { idss, degreeVal, schoolVal, fromUntilSchoolVal } = details;

    let styleColorHeading = this.props.styleCol;
    let classEducation = "d-flex-add-deleteEdu";

    let isresume2From = true;

    if (this.props.selectResume === "Resume1") {
      styleColorHeading = this.props.styleCol;
      classEducation = "d-flex-add-deleteEdu";
      isresume2From = true;
    } else if (this.props.selectResume === "Resume2") {
      styleColorHeading = "";
      classEducation = "d-flex-add-delete";
      isresume2From = false;
    }

    return (
      <div>
        <div>
          <div className={classEducation}>
            {checkLen && (
              <div class="cont-add-button-exp">
                <button
                  class="add-button-exp"
                  onClick={() => this.onDeletess(OnDeleteMainEducation, idss)}
                >
                  -
                </button>
              </div>
            )}

            {/* <div
              class="cont-add-button-exp"
              onClick={() => this.onAdd2ss(onAddNewEducation)}
            >
              <button class="add-button-exp">+</button>
            </div> */}
          </div>

          <ul>
            <li style={{ color: styleColorHeading, fontSize: "22px" }}>
              {" "}
              <input
                ref={this.props.inputRefEducationDegree}
                value={degreeVal}
                type="text"
                className="position-text margin fontSizeClasspara"
                placeholder="Degree"
                onChange={this.onDegree}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && degreeVal.trim() !== "") {
                    this.inputRefEducationSchool.current.focus();
                  }
                }}
                style={{ color: styleColorHeading }}
              />{" "}
              <br />
            </li>

            <div className="from-until-flex">
              <input
                ref={this.inputRefEducationSchool}
                value={schoolVal}
                type="text"
                className="employer-text sub-margin fontSizeClasspara"
                placeholder="School"
                onChange={this.onSchool}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && schoolVal.trim() !== "") {
                    this.inputRefEduFrom.current.focus();
                  }
                }}
              />
              {isresume2From && (
                <input
                  ref={this.inputRefEduFrom}
                  type="text"
                  className="border-text-from-until fontSizeClasspara"
                  placeholder="From-Until"
                  value={fromUntilSchoolVal}
                  onChange={this.onFromUntil}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && fromUntilSchoolVal.trim() !== "") {
                      this.props.inputEnterCity.current.focus();
                    }
                  }}
                />
              )}
              {!isresume2From && (
                <input
                  ref={this.inputRefEduFrom}
                  type="text"
                  className="border-text-from-until fontSizeClasspara"
                  placeholder="From-Until"
                  value={fromUntilSchoolVal}
                  onChange={this.onFromUntil}
                />
              )}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
