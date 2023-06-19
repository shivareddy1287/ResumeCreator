import React, { Component } from "react";
import "./workexperience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleArrowDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";

class AddWorkExp extends Component {
  state = {
    workText: this.props.details.workVal,
    dottedBorder: "none",
    // mini: "110px",
    position: this.props.details.positionVal,
    employer: this.props.details.employerVal,

    idIndexWork: "",
    isFunWork: false,
    isCheckedInput: false,
    fromDateValue: this.props.details.fromDateValue,
    toDateValue: this.props.details.toDateValue,
    actualFromDateValue: this.props.details.actualFromDateValue,
    actualToDateValue: this.props.details.actualToDateValue,

    showWorkExpWidget: false,
    educationStyleBorder: { border: "none" },
  };

  input1RefPos2 = React.createRef();
  input1RefPos3 = React.createRef();
  input1RefPos4 = React.createRef();

  workExperienceWidget = React.createRef();

  onworkText = (e) => {
    this.setState({
      workText: e.target.value,
      scrollDum2: `${e.target.scrollHeight}px`,
    });

    const workExpTextarea = e.target;
    workExpTextarea.style.height = "auto";
    workExpTextarea.style.height = `${workExpTextarea.scrollHeight}px`;
    this.props.onChangeFunAddWorkChangeValMain(
      e.target.value,
      this.state.position,
      this.state.employer,
      this.state.fromUntil,
      this.props.details.id,
      `${e.target.scrollHeight}px`,
      this.state.fromDateValue,
      this.state.toDateValue,
      this.state.actualFromDateValue,
      this.state.actualToDateValue
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
      this.props.details.scrollDum2Height,
      this.state.fromDateValue,
      this.state.toDateValue,
      this.state.actualFromDateValue,
      this.state.actualToDateValue
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
      this.props.details.scrollDum2Height,
      this.state.fromDateValue,
      this.state.toDateValue,
      this.state.actualFromDateValue,
      this.state.actualToDateValue
    );
  };

  onClickWorkExperienceTab = () => {
    this.setState({ showWorkExpWidget: true });
    this.setState({
      educationStyleBorder: {
        border: "2px dashed",
        padding: "4.5px",
        borderRadius: "10px",
      },
    });
  };

  onDelete = (OnDeleteMain, id) => {
    OnDeleteMain(id);
  };

  nextFocusFunAddWorkExp = () => {
    this.setState({ idIndexWork: "", isFunWork: true });
  };

  onChangeCheckBoxStatus = (event) => {
    this.setState({ isCheckedInput: event.target.checked });

    if (event.target.checked === true) {
      this.setState({ actualToDateValue: "Current Org" });
      this.setState({ toDateValue: "Current Org" });
      this.props.onChangeFunAddWorkChangeValMain(
        this.state.workText,
        this.state.position,
        this.state.employer,
        this.state.fromUntil,
        this.props.details.id,
        this.props.details.scrollDum2Height,
        this.state.fromDateValue,
        "Current Org",
        this.state.actualFromDateValue,
        "Current Org"
      );
    } else {
      this.setState({ toDateValue: "" });
      this.props.onChangeFunAddWorkChangeValMain(
        this.state.workText,
        this.state.position,
        this.state.employer,
        this.state.fromUntil,
        this.props.details.id,
        this.props.details.scrollDum2Height,
        this.state.fromDateValue,
        "",
        this.state.actualFromDateValue,
        ""
      );
    }
  };

  onChangeFromDate = (event) => {
    const [year, month] = event.target.value.split("-");
    this.setState({ fromDateValue: `${month}/${year}` });
    this.setState({ actualFromDateValue: event.target.value });
    this.props.onChangeFunAddWorkChangeValMain(
      this.state.workText,
      this.state.position,
      this.state.employer,
      this.state.fromUntil,
      this.props.details.id,
      this.props.details.scrollDum2Height,
      `${month}/${year}`,
      this.state.toDateValue,
      event.target.value,
      this.state.actualToDateValue
    );
  };

  onChangeToDate = (event) => {
    const [year, month] = event.target.value.split("-");
    this.setState({ toDateValue: `${month}/${year}` });

    this.setState({ actualToDateValue: event.target.value });
    this.props.onChangeFunAddWorkChangeValMain(
      this.state.workText,
      this.state.position,
      this.state.employer,
      this.state.fromUntil,
      this.props.details.id,
      this.props.details.scrollDum2Height,
      this.state.fromDateValue,
      `${month}/${year}`,
      this.state.actualFromDateValue,
      event.target.value
    );
  };

  componentDidMount() {
    // this.onworkText({ target: this.input1RefPos4 });
    document.addEventListener("mousedown", this.handleEduClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleEduClickOutside);
  }

  handleEduClickOutside = (event) => {
    if (
      this.workExperienceWidget.current &&
      !this.workExperienceWidget.current.contains(event.target)
    ) {
      this.setState({ showWorkExpWidget: false });
      this.setState({ educationStyleBorder: { border: "none" } });
    }
  };

  onFocusonWEInputElement = () => {
    // this.setState({ showWorkExpWidget: true });
    this.setState({
      educationStyleBorder: {
        border: "2px dashed",
        padding: "4.5px",
        borderRadius: "10px",
      },
    });
  };

  onSwapUpElement = () => {
    const { details, onSwapWorkExpUpElement } = this.props;
    const { id } = details;
    onSwapWorkExpUpElement(id);
  };

  onSwapDownElement = () => {
    const { details, onSwapWorkExpDownElement } = this.props;
    const { id } = details;
    onSwapWorkExpDownElement(id);
  };

  render() {
    if (this.state.isFunWork) {
      const nextId = this.props.newAdd[this.props.newAdd.length - 1]?.id;

      if (nextId !== undefined) {
        const inputIdEnter = document.getElementById(`${nextId}`);

        if (inputIdEnter !== null) {
          inputIdEnter.focus();

          this.setState({ isFunWork: false });
        } else {
          this.setState({ idIndexWork: "" });
        }
      }
    }

    const resul1 = this.props.newAdd.every(
      (each) => each.positionVal.length > 0
    );

    const resul2 = this.props.newAdd.every((each) => each.workVal.length > 0);

    const resul3 = this.props.newAdd.every(
      (each) => each.employerVal.length > 0
    );

    const final = resul1 && resul2 && resul3;

    const { details, OnDeleteMain, deleteDisplay } = this.props;

    const {
      id,
      workVal,
      positionVal,
      employerVal,
      // fromDateValue,
      // toDateValue,
    } = details;

    const {
      dottedBorder,
      isCheckedInput,
      actualFromDateValue,
      actualToDateValue,
      showWorkExpWidget,
      educationStyleBorder,
    } = this.state;

    let classNameWorktext =
      "work-text-total work-size-change fontSizeClasspara";
    let buttonPosition = "d-flex-add-delete";
    let styleColorHeading = this.props.styleCol;
    let fromuntilClass = "from-until-flex";

    if (this.props.selectResume === "Resume1") {
      classNameWorktext = "work-text-total work-size-change fontSizeClasspara";
      buttonPosition = "d-flex-add-delete";
      styleColorHeading = this.props.styleCol;
      fromuntilClass = "from-until-flex";
    } else if (this.props.selectResume === "Resume2") {
      classNameWorktext =
        "work-text-total-resume2 work-size-change fontSizeClasspara";
      buttonPosition = "d-flex-add-delete-resume2";
      styleColorHeading = "";
      fromuntilClass = "";
    } else if (this.props.selectResume === "Resume3") {
      classNameWorktext =
        "work-text-total-resume3 work-size-change fontSizeClasspara";
    }

    const workSizeText = document.getElementsByClassName("work-size-change")[0];
    if (workSizeText) {
      workSizeText.style.height = "auto";
      workSizeText.style.height = `${workSizeText.scrollHeight}px`;
    }

    return (
      <div className="work-exp-li-element">
        <div
          className="main-cont-width"
          onClick={this.onClickWorkExperienceTab}
          style={educationStyleBorder}
          ref={this.workExperienceWidget}
        >
          <div className={buttonPosition}>
            {/* {deleteDisplay && ( */}
            {deleteDisplay && showWorkExpWidget && (
              <div class="all-widget-pop-upp">
                <div className="widget-options">
                  <span onClick={() => this.onDelete(OnDeleteMain, id)}>
                    <FontAwesomeIcon className="icon-style" icon={faTrash} />
                  </span>
                  <span onClick={this.onSwapUpElement}>
                    <FontAwesomeIcon
                      icon={faCircleArrowUp}
                      className="icon-style"
                    />
                  </span>
                  <span onClick={this.onSwapDownElement}>
                    <FontAwesomeIcon
                      icon={faCircleArrowDown}
                      className="icon-style"
                    />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div
            className="colored-list0"
            style={{ border: dottedBorder, borderColor: "grey" }}
          >
            <div>
              <div className="work-expirience-tilldate-container">
                <div
                  className="we-left-cont"
                  style={{ color: styleColorHeading, fontSize: "22px" }}
                >
                  {" "}
                  <input
                    id={this.props.details.id}
                    ref={this.props.input1RefPos1}
                    value={positionVal}
                    onFocus={this.onFocusonWEInputElement}
                    type="text"
                    className="position-text margin fontSizeClasspara"
                    placeholder="Position"
                    onChange={this.onPosition}
                    style={{ color: styleColorHeading }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && positionVal.trim() !== "") {
                        e.preventDefault();
                        this.input1RefPos2.current.focus();
                      }
                    }}
                  />{" "}
                  <br />
                  <div className={fromuntilClass}>
                    <input
                      ref={this.input1RefPos2}
                      value={employerVal}
                      className="employer-text sub-margin fontSizeClasspara "
                      type="text"
                      placeholder="Employer"
                      onChange={this.onEmployer}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && employerVal.trim() !== "") {
                          e.preventDefault();
                          this.input1RefPos4.current.focus();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="we-right-cont">
                  <input
                    type="checkbox"
                    className="till-date-checkbox"
                    onChange={this.onChangeCheckBoxStatus}
                  />
                  <label className="till-date-text">Current Org</label>
                  <div className="checkbox-container">
                    <input
                      value={actualFromDateValue}
                      onChange={this.onChangeFromDate}
                      type="month"
                      className="we-date-input"
                    />
                    -
                    {isCheckedInput && (
                      <span
                        className="till-date-res-text"
                        value={actualToDateValue}
                      >
                        Current Org
                      </span>
                    )}
                    {!isCheckedInput && (
                      <input
                        value={actualToDateValue}
                        onChange={this.onChangeToDate}
                        className="we-date-input"
                        type="month"
                      />
                    )}
                  </div>
                </div>
              </div>

              <textarea
                rows="1"
                ref={this.input1RefPos4}
                type="text"
                onChange={this.onworkText}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    positionVal.length !== 0 &&
                    workVal.trim() !== "" &&
                    employerVal.length !== 0 &&
                    final
                  ) {
                    this.setState({ showWorkExpWidget: false });
                    this.setState({ educationStyleBorder: { border: "none" } });
                    this.props.onAddNew();
                    this.input1RefPos4.current.blur();
                    this.nextFocusFunAddWorkExp();
                  }
                }}
                style={{
                  height: this.props.details.scrollDum2Height,
                  resize: "none",
                  overflow: "hidden",
                  padding: "5px",
                }}
                value={workVal}
                className={classNameWorktext}
                placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value on responsibilities that are relevant to the job you are applying for. If you need help writing your word experience description, you can use the AI Writing Assistant."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddWorkExp;
