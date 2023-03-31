import React, { Component } from "react";
import "./workexperience.css";

class AddWorkExp extends Component {
  state = {
    workText: "",
    dottedBorder: "none",
    // mini: "110px",
    position: this.props.details.positionVal,
    employer: this.props.details.employerVal,
    fromUntil: this.props.details.fromUntilVal,
    idIndexWork: "",
    isFunWork: false,
  };

  input1RefPos2 = React.createRef();
  input1RefPos3 = React.createRef();
  input1RefPos4 = React.createRef();

  onworkText = (e) => {
    this.setState({
      workText: e.target.value,
      scrollDum2: `${e.target.scrollHeight}px`,
    });
    // e.target.style.height = "auto";
    // e.target.style.height = `${e.target.scrollHeight}px`;
    this.props.onChangeFunAddWorkChangeValMain(
      e.target.value,
      this.state.position,
      this.state.employer,
      this.state.fromUntil,
      this.props.details.id,
      `${e.target.scrollHeight}px`
    );
  };

  onPosition = (e) => {
    this.setState({ position: e.target.value });
    this.props.onChangeFunAddWorkChangeValMain(
      this.state.workText,
      e.target.value,
      this.state.employer,
      this.state.fromUntil,
      this.props.details.id,
      this.props.details.scrollDum2Height
    );
  };

  onEmployer = (e) => {
    this.setState({ employer: e.target.value });
    this.props.onChangeFunAddWorkChangeValMain(
      this.state.workText,
      this.state.position,
      e.target.value,
      this.state.fromUntil,
      this.props.details.id,
      this.props.details.scrollDum2Height
    );
  };

  onFromUntil = (e) => {
    this.setState({ fromUntil: e.target.value });
    this.props.onChangeFunAddWorkChangeValMain(
      this.state.workText,
      this.state.position,
      this.state.employer,
      e.target.value,
      this.props.details.id,
      this.props.details.scrollDum2Height
    );
  };

  onDelete = (OnDeleteMain, id) => {
    OnDeleteMain(id);
  };

  // onMouseEnterWorkExperienceTab = () => {
  //   this.setState({ dottedBorder: "dashed" });
  // };
  // onMouseLeaveWorkExperienceTab = () => {
  //   this.setState({ dottedBorder: "none" });
  // };

  nextFocusFunAddWorkExp = () => {
    this.setState({ idIndexWork: "", isFunWork: true });
  };

  render() {
    if (this.state.isFunWork) {
      const nextId = this.props.newAdd[this.props.newAdd.length - 1]?.id;
      // console.log(1);
      if (nextId !== undefined) {
        const inputIdEnter = document.getElementById(`${nextId}`);
        // console.log(2);

        if (inputIdEnter !== null) {
          inputIdEnter.focus();
          // console.log(3);
          this.setState({ isFunWork: false });
        } else {
          this.setState({ idIndexWork: "" });

          // console.log(4);
        }
      }

      // else {
      //   this.setState({ idIndexWork: "" });

      //   // console.log(5);
      // }
    }

    const resul1 = this.props.newAdd.every(
      (each) => each.positionVal.length > 0
    );

    const resul2 = this.props.newAdd.every((each) => each.workVal.length > 0);

    const resul3 = this.props.newAdd.every(
      (each) => each.employerVal.length > 0
    );

    const resul4 = this.props.newAdd.every(
      (each) => each.fromUntilVal.length > 0
    );

    const final = resul1 && resul2 && resul3 && resul4;

    const { details, OnDeleteMain, deleteDisplay } = this.props;

    const { id, workVal, positionVal, employerVal, fromUntilVal } = details;
    const { dottedBorder } = this.state;

    let classNameWorktext = "work-text-total fontSizeClasspara";
    let buttonPosition = "d-flex-add-delete";
    let styleColorHeading = this.props.styleCol;
    let fromuntilClass = "from-until-flex";

    if (this.props.selectResume === "Resume1") {
      classNameWorktext = "work-text-total fontSizeClasspara";
      buttonPosition = "d-flex-add-delete";
      styleColorHeading = this.props.styleCol;
      fromuntilClass = "from-until-flex";
    } else if (this.props.selectResume === "Resume2") {
      classNameWorktext = "work-text-total-resume2 fontSizeClasspara";
      buttonPosition = "d-flex-add-delete-resume2";
      styleColorHeading = "";
      fromuntilClass = "";
    }

    return (
      <div>
        <div className="main-cont-width">
          <div className={buttonPosition}>
            {deleteDisplay && (
              <div class="cont-add-button-exp">
                <button
                  class="add-button-exp"
                  onClick={() => this.onDelete(OnDeleteMain, id)}
                >
                  -
                </button>
              </div>
            )}

            {/* <div
              class="cont-add-button-exp"
              onClick={() => this.onAdd2(onAddNew)}
            >
              <button class="add-button-exp">+</button>
            </div> */}
          </div>
          <div
            className="colored-list0"
            style={{ border: dottedBorder, borderColor: "grey" }}
            // onMouseEnter={this.onMouseEnterWorkExperienceTab}
            // onMouseLeave={this.onMouseLeaveWorkExperienceTab}
          >
            <div>
              <ul>
                <li style={{ color: styleColorHeading, fontSize: "22px" }}>
                  {" "}
                  <input
                    id={this.props.details.id}
                    ref={this.props.input1RefPos1}
                    value={positionVal}
                    type="text"
                    className="position-text margin fontSizeClasspara"
                    placeholder="Position"
                    onChange={this.onPosition}
                    style={{ color: styleColorHeading }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && positionVal.trim() !== "") {
                        this.input1RefPos2.current.focus();
                      }
                    }}
                  />{" "}
                  <br />
                </li>
                <div className={fromuntilClass}>
                  <input
                    ref={this.input1RefPos2}
                    value={employerVal}
                    className="employer-text sub-margin fontSizeClasspara"
                    type="text"
                    placeholder="Employer"
                    onChange={this.onEmployer}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && employerVal.trim() !== "") {
                        this.input1RefPos3.current.focus();
                      }
                    }}
                  />

                  <div>
                    <input
                      ref={this.input1RefPos3}
                      type="text"
                      className="border-text-from-until fontSizeClasspara"
                      placeholder="From-until"
                      value={fromUntilVal}
                      onChange={this.onFromUntil}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && fromUntilVal.trim() !== "") {
                          this.input1RefPos4.current.focus();
                        }
                      }}
                    />
                  </div>
                </div>
                <textarea
                  ref={this.input1RefPos4}
                  type="text"
                  onChange={this.onworkText}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      positionVal.length !== 0 &&
                      fromUntilVal.length !== 0 &&
                      workVal.trim() !== "" &&
                      employerVal.length !== 0 &&
                      final
                    ) {
                      this.props.onAddNew();
                      this.input1RefPos4.current.blur();

                      this.nextFocusFunAddWorkExp();
                    }
                  }}
                  style={{
                    height: this.props.details.scrollDum2Height,
                    resize: "none",
                    overflow: "hidden",
                  }}
                  value={workVal}
                  className={classNameWorktext}
                  placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value on responsibilities that are relevant to the job you are applying for. If you need help writing your word experience description, you can use the AI Writing Assistant."
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddWorkExp;
