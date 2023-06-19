import React, { Component } from "react";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleArrowDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";
// import { FaTrash, FaSave } from "react-icons/fa";

class Education extends Component {
  state = {
    degree: this.props.details.degreeVal,
    school: this.props.details.schoolVal,
    fromSchool: this.props.details.fromSchoolVal,
    untillSchool: this.props.details.toSchoolVal,
    showEducationWidget: false,
    eduSelectStyleBorder: {
      border: "none",
    },
    isEducation: false,
    idIndexEduc: "",
  };

  inputRefEducationSchool = React.createRef();
  inputRefEduFrom = React.createRef();
  inputRefEnterCity = React.createRef();

  eduWidjetRef = React.createRef();

  onDeletess = (OnDeleteMainEducation, idss) => {
    OnDeleteMainEducation(idss);
  };

  onDegree = (e) => {
    this.setState({ degree: e.target.value });
    console.log(
      this.state.school,
      this.state.degree,
      this.state.fromSchool,
      this.state.untillSchool
    );
    this.props.onChangeValMainEducation(
      e.target.value,
      this.state.school,
      this.state.fromSchool,
      this.state.untillSchool,
      this.props.details.idss
    );
  };

  onSchool = (e) => {
    this.setState({ school: e.target.value });
    this.props.onChangeValMainEducation(
      this.state.degree,
      e.target.value,
      this.state.fromSchool,
      this.state.untillSchool,
      this.props.details.idss
    );
  };
  onChangeFromValue = (event) => {
    this.setState({ fromSchool: event.target.value });
    this.props.onChangeValMainEducation(
      this.state.degree,
      this.state.school,
      event.target.value,
      this.state.untillSchool,
      this.props.details.idss
    );
  };

  onChangeUntillVal = (event) => {
    this.setState({ untillSchool: event.target.value });
    this.props.onChangeValMainEducation(
      this.state.degree,
      this.state.school,
      this.state.fromSchool,
      event.target.value,
      this.props.details.idss
    );
  };

  onHandleSwapUp = () => {
    const { details, onSwapUpEducation } = this.props;
    const { idss } = details;
    onSwapUpEducation(idss);
  };

  onHandleSwapDown = () => {
    const { details, onSwapDownEducation } = this.props;
    const { idss } = details;
    onSwapDownEducation(idss);
  };

  onFocusonInputElement = () => {
    this.setState({
      eduSelectStyleBorder: {
        border: "2px dashed",
        borderRadius: "10px",
        // paddingRight: "5px",
        padding: "4.5px",
      },
    });
    // this.setState({ showEducationWidget: true });
  };

  onClickOnEducationContainer = () => {
    this.setState({ showEducationWidget: true });
    this.setState({
      eduSelectStyleBorder: {
        border: "2px dashed",
        borderRadius: "10px",
        // paddingRight: "5px",
        padding: "4.5px",
      },
    });
  };

  handleEducationClickOutSide = (event) => {
    if (
      this.eduWidjetRef.current &&
      !this.eduWidjetRef.current.contains(event.target)
    ) {
      this.setState({ showEducationWidget: false });
      this.setState({ eduSelectStyleBorder: { border: "none" } });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleEducationClickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleEducationClickOutSide);
  }

  nextFocusFunEduction = () => {
    this.setState({ idIndexEduc: "", isEducation: true });
  };

  render() {
    const { details, OnDeleteMainEducation, checkLen } = this.props;

    const { showEducationWidget, eduSelectStyleBorder } = this.state;

    const { idss, degreeVal, schoolVal } = details;

    let styleColorHeading = this.props.styleCol;
    let classEducation = "d-flex-add-deleteEdu";

    if (this.props.selectResume === "Resume1") {
      styleColorHeading = this.props.styleCol;
      classEducation = "d-flex-add-deleteEdu";
    } else if (this.props.selectResume === "Resume2") {
      styleColorHeading = "";
    }

    if (this.state.isEducation) {
      const nextId =
        this.props.newAddEducation[this.props.newAddEducation.length - 1]?.idss;

      if (nextId !== undefined) {
        const inputIdEnter = document.getElementById(`${nextId}`);

        if (inputIdEnter !== null) {
          inputIdEnter.focus();

          this.setState({ isEducation: false });
        } else {
          this.setState({ idIndexEduc: "" });
        }
      }
    }

    const resul1 = this.props.newAddEducation.every(
      (each) => each.degreeVal.length > 0
    );

    const resul2 = this.props.newAddEducation.every(
      (each) => each.schoolVal.length > 0
    );

    const finalEdu = resul1 && resul2;

    return (
      <div
        className="education-li-item"
        onClick={this.onClickOnEducationContainer}
        ref={this.eduWidjetRef}
        style={eduSelectStyleBorder}
      >
        <div>
          <div className="inividual-education-container">
            <div className={classEducation}>
              {checkLen && showEducationWidget && (
                <div className="all-widget-pop-upp" ref={this.skillspopupRef}>
                  <div className="widget-options">
                    <span
                      className="buttonn"
                      onClick={() =>
                        this.onDeletess(OnDeleteMainEducation, idss)
                      }
                    >
                      <FontAwesomeIcon className="icon-style" icon={faTrash} />
                    </span>
                    <span onClick={this.onHandleSwapUp}>
                      <FontAwesomeIcon
                        icon={faCircleArrowUp}
                        className="icon-style"
                      />
                    </span>
                    <span onClick={this.onHandleSwapDown}>
                      <FontAwesomeIcon
                        className="icon-style"
                        icon={faCircleArrowDown}
                      />
                    </span>
                  </div>
                </div>
                // <div class="all-widget-pop-up">
                //   <button
                //     class=""
                //     onClick={() => this.onDeletess(OnDeleteMainEducation, idss)}
                //   >
                //     -
                //   </button>
                //   <button onClick={this.onHandleSwapUp}>up</button>
                //   <button onClick={this.onHandleSwapDown}>Down</button>
                // </div>
              )}
            </div>
            <div className="eud-input-cont-from-to">
              <div style={{ color: styleColorHeading, fontSize: "22px" }}>
                {" "}
                <input
                  id={this.props.details.idss}
                  ref={this.props.inputRefEducationDegree}
                  onFocus={this.onFocusonInputElement}
                  value={degreeVal}
                  type="text"
                  className="position-text margin fontSizeClasspara"
                  placeholder="College Name"
                  onChange={this.onDegree}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && degreeVal.trim() !== "") {
                      this.inputRefEducationSchool.current.focus();
                    }
                  }}
                  style={{ color: styleColorHeading }}
                />{" "}
                <br />
                <div className="from-until-flex">
                  <input
                    ref={this.inputRefEducationSchool}
                    value={schoolVal}
                    type="text"
                    className="employer-text sub-margin fontSizeClasspara"
                    placeholder="Degree"
                    onChange={this.onSchool}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        schoolVal.trim() !== "" &&
                        degreeVal.trim() !== "" &&
                        finalEdu
                      ) {
                        this.setState({
                          eduSelectStyleBorder: { border: "none" },
                        });
                        this.setState({ showEducationWidget: false });
                        this.props.onAddNewEducation();
                        this.inputRefEducationSchool.current.blur();

                        this.nextFocusFunEduction();
                      }
                    }}
                  />{" "}
                  <input
                    placeholder="Per %"
                    type="text"
                    className="education-percentage"
                  />
                </div>
              </div>
              <div>
                <input
                  placeholder="from"
                  style={{ textAlign: "center" }}
                  onChange={this.onChangeFromValue}
                  value={this.state.fromSchool}
                  className="eud-from-to"
                  maxLength="4"
                />
                -
                <input
                  placeholder="untill"
                  style={{ textAlign: "center" }}
                  value={this.state.untillSchool}
                  onChange={this.onChangeUntillVal}
                  className="eud-from-to"
                  maxLength="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
